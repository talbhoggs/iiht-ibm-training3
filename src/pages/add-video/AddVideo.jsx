import React, { Component } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PlayListAdmin from './components/playlist/PlayListAdmin';
import AddForm from './components/add-form/AddForm';
import { getVideos, saveVideo, deleteVideo, getVideo } from "./../../api/videoApi";

class AddVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video : {
        title: "",
        link: ""
      }
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

  handleSubmit = e => {
    e.preventDefault();
    alert( this.state.video.title + " " + this.state.video.link)
  }

  render() { 
    return ( <>
      <Row><Col sm={4}><AddForm video={this.state.video} onSubmit={this.handleSubmit} onTitleChange={this.handleTitleChange} onLinkChange={this.handleLinkChange}>
        </AddForm></Col><Col sm={6}></Col></Row>
      <PlayListAdmin></PlayListAdmin>
    </> );
  }
}

function mapStateToProps(state) {
  return {video: state.video};
}

export default connect(mapStateToProps)(AddVideo);