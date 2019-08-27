import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand><FontAwesomeIcon icon={['fab', 'react']} />
            {' IIHT-IBM Video Player (react)'}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              
              <Nav.Link href="/about"><FontAwesomeIcon icon="home" /> About</Nav.Link>
              <Nav.Link href="/player"><FontAwesomeIcon icon="play-circle" /> Player</Nav.Link>
              <Nav.Link href="/add-video"><FontAwesomeIcon icon="plus-circle" /> Add Video</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
export default Header;
