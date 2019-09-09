import React, { Component } from 'react';

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
        <td>@mdo</td>
      </tr>
    </>
    );
  }
}

export default TableRow;