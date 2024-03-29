import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './../table-row/TableRow';

class PlayListAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { videos, handleDelete, handleEdit, handeApproved } = this.props;
    return (
      <>
        <br />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {videos.map((video) => (
          <TableRow key={video.id} video={video} handleDelete={handleDelete} handleEdit={handleEdit} handeApproved={handeApproved} />
        ))}
        </tbody>
      </Table>
      </>
    );
  }
}

export default PlayListAdmin;