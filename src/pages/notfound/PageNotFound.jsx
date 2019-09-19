import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (<>
    <Row>
      <Col>
      <h4>That page doesn't exist</h4>
      <a href="/Player">Go Back to  Player Page</a>
      </Col>
    </Row>
    </>);
  }
}
 
export default PageNotFound;