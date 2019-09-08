import React, { Component } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PlayListAdmin from './components/playlist/PlayListAdmin';
import AddForm from './components/add-form/AddForm';
import { getVideos, saveVideo, deleteVideo, getVideo } from "../../api/videoService";

import PropTypes from 'prop-types';

class AddVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video : {
        title: "",
        link: "",
        status: "added",
        approved: 0,
        likes: 0,
        unlikes: 0,
        currentStatus: "paused",
        exitplayprogress: 0
      },
      errors : {}
    };
  }

  handleTitleChange = e => {
    const video = {...this.state.video, title: e.target.value};
    this.setState({video: video});
  }

  handleLinkChange = e => {
    const video = {...this.state.video, link: e.target.value};
    this.setState({video: video});
  }

  clearState = () => {
    this.setState({
      video : {
        title: "",
        link: "",
        status: "added",
        approved: 0,
        likes: 0,
        unlikes: 0,
        currentStatus: "paused",
        exitplayprogress: 0
      },
      errors : {}
    });
  }

  handleSubmit = e => {

    e.preventDefault();
    const { video } = this.state;
    const errorsObj = {};
    let hasLinkValue = false;
    if (video.title === '') {
      errorsObj.title = 'Title is required';
    }

    if (video.link === '') {
      errorsObj.link = 'Link is required';
      hasLinkValue = true;
    }

    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;

    const url = (decodeURIComponent(video.link));
    const match = url.match(regex);

    if (!hasLinkValue && !match) {
      errorsObj.link = "Url must be in the following format https://www.youtube.com/watch?v=hashcode\n example : https://www.youtube.com/watch?v=h_w_0zUs9ac';";
    }

    if(Object.keys(errorsObj).length !== 0) {
      const errorsSet = {...this.state.errors, errorsObj};
      this.setState({errors : errorsSet.errorsObj});
      return;
    }

    saveVideo(video);
    this.clearState();
  }

  render() { 
    return ( <>
      <Row><Col sm={4}><AddForm errors={this.state.errors} video={this.state.video} onSubmit={this.handleSubmit} onTitleChange={this.handleTitleChange} onLinkChange={this.handleLinkChange}>
        </AddForm></Col><Col sm={6}></Col></Row>
      <PlayListAdmin></PlayListAdmin>
    </> );
  }
}

function mapStateToProps(state) {
  return {video: state.video};
}

export default connect(mapStateToProps)(AddVideo);