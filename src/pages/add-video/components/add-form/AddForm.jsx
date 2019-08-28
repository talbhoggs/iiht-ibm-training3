import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <>
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={this.props.onTitleChange} value={this.props.video.title} />
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Youtube Url</Form.Label>
          <Form.Control type="text" onChange={this.props.onLinkChange} value={this.props.video.link} />
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
