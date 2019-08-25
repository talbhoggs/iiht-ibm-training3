import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddForm extends Component {
  render () {
    return (
      <>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Youtube Url</Form.Label>
          <Form.Control type="text" />
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
