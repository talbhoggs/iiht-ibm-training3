import React, { Component } from 'react';

import './About.css';

class About extends Component {
  render() { 
    return (
      <>    
      <h3>About</h3>
      <p>This webapp is assignment number 3 for the Full Stack Developer (FSD) course by <a href="https://iiht.com">IIHT</a> and <a href="https://www.ibm.com">IBM</a>.</p>
      <p>
        <strong>Date submitted:</strong> March 25, 2019
        <br />
        <strong>Developer:</strong> Charles A. Amper
        <br />
        <strong>Email:</strong> amperca@ph.ibm.com
      </p>
      <h5>Technologies used:</h5>
      <ul>
        <li>React</li>
        <li><a href="https://react-bootstrap.github.io">React Bootstrap</a> (react-bootstrap.github.io)</li>
        <li><a href="https://github.com/typicode/json-server">JSON Server fake api</a></li>
        <li><a href="https://developers.google.com/youtube/iframe_api_reference">
          YouTube Player API Reference for iframe Embeds</a></li>
      </ul>
      </>
    );
  }
}
 
export default About;