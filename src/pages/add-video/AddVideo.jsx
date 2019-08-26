import React, { Component } from 'react';
import AddForm from './components/add-form/AddForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlayListAdmin from './components/playlist/PlayListAdmin';

class AddVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return ( <>
      <Row><Col sm={4}><AddForm></AddForm></Col><Col sm={6}></Col></Row>
      <PlayListAdmin></PlayListAdmin>
    </> );
  }
}
export default AddVideo;