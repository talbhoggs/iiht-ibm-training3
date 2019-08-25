import React, { Component } from 'react';
import AddForm from './components/add-form/AddForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class AddVideo extends Component {
  state = {  }
  render() { 
    return ( <>
      <Row><Col><AddForm></AddForm></Col><Col></Col></Row>
    </> );
  }
}
 
export default AddVideo;