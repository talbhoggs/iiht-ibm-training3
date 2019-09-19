import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { aboutActive: false, videoActive: false, playerActive: true};
  }

  handleActiveLink(activeLink){
      if(activeLink == "about") {
        this.setState({...this.state.aboutActive, aboutActive :true})
        this.setState({...this.state.videoActive, videoActive :false})
        this.setState({...this.state.playerActive, playerActive :false})
      } else if (activeLink == "player") {
        this.setState({...this.state.aboutActive, aboutActive :false})
        this.setState({...this.state.videoActive, videoActive :false})
        this.setState({...this.state.playerActive, playerActive :true})
      } else {
        this.setState({...this.state.aboutActive, aboutActive :false})
        this.setState({...this.state.videoActive, videoActive :true})
        this.setState({...this.state.playerActive, playerActive :false})
      }
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand><FontAwesomeIcon icon={['fab', 'react']} />
            {' IIHT-IBM Video Player (react)'}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              
              <Nav.Item>
                <Link onClick={this.handleActiveLink.bind(this, "about")} to="/about" className={`${this.state.aboutActive ? 'activeLink' : 'inActiveLink'}`}><FontAwesomeIcon icon="home" /> About</Link>&nbsp;|
              </Nav.Item>
              <Nav.Item>
              <Link onClick={this.handleActiveLink.bind(this, "player")} to="/player" className={`${this.state.playerActive ? 'activeLink' : 'inActiveLink'}`}><FontAwesomeIcon icon="play-circle" /> Player</Link>&nbsp;|</Nav.Item>

              <Nav.Item><Link onClick={this.handleActiveLink.bind(this, "addvideo")} to="/add-video" className={`${this.state.videoActive ? 'activeLink' : 'inActiveLink'}`}><FontAwesomeIcon icon="plus-circle" /> Add Video</Link></Nav.Item>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
export default Header;
