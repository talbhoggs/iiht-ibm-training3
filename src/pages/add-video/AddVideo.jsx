import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PlayListAdmin from './components/playlist/PlayListAdmin';
import AddForm from './components/add-form/AddForm';
import DeleteModal from './components/modal/DeleteModal';
import EditModal from './components/modal/EditModal';

import { getVideos, saveVideo, deleteVideo } from "../../api/videoService";

class AddVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video : {
        title: "",
        url: "",
        status: "added",
        approved: 0,
        likes: 0,
        unlikes: 0,
        currentStatus: "paused",
        exitplayprogress: 0
      },
      errors : {},
      errorsEdit : {},
      videos : [],
      modalDelete : false,
      modalEdit : false,
      deleteVideoItem : {}
    };
  }

  componentDidMount() {
    getVideos().then(res => res.json())
      .then(videos => this.setState({ videos }));
  }

  handleTitleChange = e => {
    const video = {...this.state.video, title: e.target.value};
    this.setState({video: video});
  }

  handleTitleChangeEdit = (e) => {
    console.log(e)
    const deleteVideoItem = {...this.state.deleteVideoItem, title: e.target.value};
    this.setState({deleteVideoItem});
  }

  handleLinkChangeEdit = (e) => {
    const deleteVideoItem = {...this.state.deleteVideoItem, url: e.target.value};
    this.setState({deleteVideoItem});
  }

  handleLinkChange = e => {
    const video = {...this.state.video, url: e.target.value};
    this.setState({video: video});
  }

  clearState = () => {
    this.setState({
      video : {
        title: "",
        url: "",
        status: "added",
        approved: 0,
        likes: 0,
        unlikes: 0,
        currentStatus: "paused",
        exitplayprogress: 0
      },
      errors : {},
      errorsEdit : {},
      deleteVideoItem : {}
    });
  }

  handleDelete = (deletedObj, e) => {
    e.preventDefault();
    this.handleShowModalDelete();

    const deleteVideoItem = {...this.state.deleteVideoItem, deleteVideoItem : deletedObj};
    this.setState(deleteVideoItem);

  }

  handeApproved = (updateVideo, e) => {
    e.preventDefault();
    const newApprovedValue = (updateVideo.approved == 1) ? 0 : 1;
    const video = {...updateVideo, approved : newApprovedValue};

    saveVideo(video).then(sVideo=> {

      let filtered = this.state.videos.filter(function(value, index, arr){
        return value.id !== sVideo.id;
      });

      let videos = [...filtered, sVideo];
      videos.sort((a, b) => { return a.id - b.id; });

      toast.success("Update Completed !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      this.setState({videos});
    });
  }

  handleDeleteVideo = () => {
    deleteVideo(this.state.deleteVideoItem.id).then(deletedVideo => {
      return deletedVideo;
    });

    const delItem = this.state.deleteVideoItem.id;

    let filtered = this.state.videos.filter(function(value, index, arr){
      return value.id !== delItem;
    });

    this.setState({videos: filtered,deleteVideoItem :{}});
    this.handleCloseModalDelete();

    toast.info("Item Deleted Successfully !!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  handleEdit = (selectedVideo, e) => {
    e.preventDefault();
    const modalEdit = {...this.state.modalEdit, modalEdit : true};
    this.setState(modalEdit);

    const deleteVideoItem = {...this.state.deleteVideoItem, deleteVideoItem : selectedVideo};
    this.setState(deleteVideoItem);
  }

  handleCloseModalDelete = () => {
    const modalDelete = {...this.state.modalDelete, modalDelete : false};
    this.setState(modalDelete);
  }

  handleShowModalDelete = () => {
    const modalDelete = {...this.state.modalDelete, modalDelete : true};
    this.setState(modalDelete);
  }

  handleCloseModalEdit = () => {
    const modalEdit = {...this.state.modalEdit, modalEdit : false};
    this.setState(modalEdit);
  }

  handleShowModalEdit = () => {
    const modalEdit = {...this.state.modalEdit, modalEdit : true};
    this.setState(modalEdit);
  }

  handleEditSubmit = e => {
    e.preventDefault();
    const errorsObj = {};
    const { deleteVideoItem } = this.state;
    let hasLinkValue = false;
    if (deleteVideoItem.title === '') {
      errorsObj.title = 'Title is required';
    }

    if (deleteVideoItem.url === '') {
      errorsObj.url = 'Link is required';
      hasLinkValue = true;
    }

    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;

    const url = (decodeURIComponent(deleteVideoItem.url));
    const match = url.match(regex);

    if (!hasLinkValue && !match) {
      errorsObj.url = "Url must be in the following format https://www.youtube.com/watch?v=hashcode\n example : https://www.youtube.com/watch?v=h_w_0zUs9ac';";
    }

    if(Object.keys(errorsObj).length !== 0) {
      const errorsSet = {...this.state.errorsEdit, errorsObj};
      this.setState({errorsEdit : errorsSet.errorsObj});
      return;
    }

    saveVideo(deleteVideoItem).then(sVideo=> {

      let filtered = this.state.videos.filter(function(value, index, arr){
        return value.id !== sVideo.id;
      });

      let videos = [...filtered, sVideo];
      videos.sort((a, b) => { return a.id - b.id; });

      toast.success("Update Completed !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      this.setState({videos});
      this.handleCloseModalEdit();
    });

    this.clearState();
  }
  handleSubmit = e => {

    e.preventDefault();
    const { video } = this.state;
    const errorsObj = {};
    let hasLinkValue = false;
    if (video.title === '') {
      errorsObj.title = 'Title is required';
    }

    if (video.url === '') {
      errorsObj.url = 'Link is required';
      hasLinkValue = true;
    }

    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;

    const url = (decodeURIComponent(video.url));
    const match = url.match(regex);

    if (!hasLinkValue && !match) {
      errorsObj.url = "Url must be in the following format https://www.youtube.com/watch?v=hashcode\n example : https://www.youtube.com/watch?v=h_w_0zUs9ac';";
    }

    if(Object.keys(errorsObj).length !== 0) {
      const errorsSet = {...this.state.errors, errorsObj};
      this.setState({errors : errorsSet.errorsObj});
      return;
    }

    saveVideo(video).then(sVideo=> {
      const videos = [...this.state.videos, sVideo];
      this.setState({videos});
      toast.success("Save Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    this.clearState();
  }

  render() { 
    return ( <>
      <Row><Col sm={4}><AddForm errors={this.state.errors} video={this.state.video} onSubmit={this.handleSubmit} onTitleChange={this.handleTitleChange} onLinkChange={this.handleLinkChange}>
        </AddForm></Col><Col sm={6}></Col></Row>
      <PlayListAdmin videos={this.state.videos} handleEdit={this.handleEdit} handleDelete={this.handleDelete} handeApproved={this.handeApproved}></PlayListAdmin>

      <EditModal deleteVideoItem={this.state.deleteVideoItem} modalShow={this.state.modalEdit} handleClose={this.handleCloseModalEdit} handleShow={this.handleShowModalEdit} handleDeleteVideo={this.handleDeleteVideo} errors={this.state.errors} video={this.state.video} onSubmit={this.handleEditSubmit} onTitleChange={this.handleTitleChangeEdit} onLinkChange={this.handleLinkChangeEdit}/>

      <DeleteModal deleteVideoItem={this.state.deleteVideoItem} modalShow={this.state.modalDelete} handleClose={this.handleCloseModalDelete} handleShow={this.handleShowModalDelete} handleDeleteVideo={this.handleDeleteVideo}/>
      <ToastContainer />
    </> );
  }
}

function mapStateToProps(state) {
  return {video: state.video};
}

export default connect(mapStateToProps)(AddVideo);