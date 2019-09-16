import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : this.props.video.title
    };
  }

  onTitleChange = (e) => {
    console.log(e.target.value)
  }
  render () {
    const { onSubmit, onLinkChange, video, errors, onTitleChange } = this.props;
    
    return (
      <>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={onTitleChange} defaultValue={video.title} isInvalid={errors.title} />
          {errors.title && <div className="invalid-feedback">Title is required</div>}
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Youtube Url</Form.Label>
          <Form.Control type="text" onChange={onLinkChange} defaultValue={video.url} isInvalid={errors.url} />
          {errors.url && <div className="invalid-feedback">{errors.url}</div>}
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
