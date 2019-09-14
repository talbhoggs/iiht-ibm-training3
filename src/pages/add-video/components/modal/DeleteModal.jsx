import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
class DeleteModal extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return(<>
      <Modal show={this.props.modalShow} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete these record?<br />
          <h6>#{this.props.deleteVideoItem.id} - {this.props.deleteVideoItem.title}</h6>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.props.handleDeleteVideo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>);
  }
}

export default DeleteModal;
