import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Controls.css';

class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <>
        <button onClick={this.props.handlePlay} className="btn"><FontAwesomeIcon icon="play-circle" /></button>
        <button onClick={this.props.handlePause} className="btn"><FontAwesomeIcon icon="pause-circle" /></button>
        <button onClick={this.props.handleIncreaseVolume} className="btn"><FontAwesomeIcon icon="plus-square" /></button>
        <button onClick={this.props.handleDecreaseVolume} className="btn"><FontAwesomeIcon icon="minus-square" /></button>
        <button onClick={this.props.handleReload} className="btn"><FontAwesomeIcon icon="redo-alt" /></button>
        <button onClick={this.props.handleMute} className="btn"><FontAwesomeIcon icon="headphones-alt" /></button>
        <div className="likeUnLike">
            <FontAwesomeIcon icon="thumbs-up" /> &nbsp;
            <FontAwesomeIcon icon="thumbs-down" />
        </div>
      </>);
  }
}
 
export default Controls;