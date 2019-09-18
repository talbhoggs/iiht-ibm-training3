import React, { Component } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditModal extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const {deleteVideoItem, errors, onLinkChange, onTitleChange, onSubmit} = this.props;
    return(<>
      <Modal show={this.props.modalShow} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={onTitleChange} defaultValue={deleteVideoItem.title} isInvalid={errors.title} />
            {errors.title && <div className="invalid-feedback">Title is required</div>}
          </Form.Group>
          <Form.Group controlId="url">
            <Form.Label>Youtube Url</Form.Label>
            <Form.Control type="text" onChange={onLinkChange} defaultValue={deleteVideoItem.url} isInvalid={errors.url} />
            {errors.url && <div className="invalid-feedback">{errors.url}</div>}
          </Form.Group>
          <div className="clearfix">
            <Button variant="primary" type="submit" className="float-left">
              <FontAwesomeIcon icon="plus-circle" /> Update Video
            </Button>
            <Button variant="secondary" onClick={this.props.handleClose} className="float-right">
                Cancel
            </Button>
          </div>
        </Form>
        </Modal.Body>
        
      </Modal>
    </>);
  }
}

export default EditModal;
