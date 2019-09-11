import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <>
      <tr>
        <td>{this.props.video.id}</td>
        <td>{this.props.video.title}</td>
        <td>{this.props.video.url}</td>
        <td><a onClick={this.props.handleEdit.bind(this, this.props.video.id)}><FontAwesomeIcon icon="edit" /></a> | <a onClick={this.props.handleDelete.bind(this, this.props.video.id)}><FontAwesomeIcon icon="trash-alt" /></a> | <Badge variant="success">approve</Badge> | <Badge variant="light">approve</Badge></td>
      </tr>
    </>
    );
  }
}

export default TableRow;