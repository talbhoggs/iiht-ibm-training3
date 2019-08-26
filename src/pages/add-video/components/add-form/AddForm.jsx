import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      video : {
        title: "",
        link: ""
      }
    }
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

  render () {
    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={this.handleTitleChange} value={this.state.video.title} />
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Youtube Url</Form.Label>
          <Form.Control type="text" onChange={this.handleLinkChange} value={this.state.video.link} />
        </Form.Group>
        <Button variant="primary" type="submit">
          <FontAwesomeIcon icon="plus-circle" /> Add Video
        </Button>
      </Form>
      </>
    )
  }
  
}

export default AddForm;
