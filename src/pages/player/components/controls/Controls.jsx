import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Controls.css';

class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    const url = this.props.selectedVideo.url;
    if(url == null) {
      return(
      <>
        <button className="btn disabled"><FontAwesomeIcon icon="play-circle" /></button>
        <button className="btn disabled"><FontAwesomeIcon icon="pause-circle" /></button>
        <button className="btn disabled"><FontAwesomeIcon icon="plus-square" /></button>
        <button className="btn disabled"><FontAwesomeIcon icon="minus-square" /></button>
        <button className="btn disabled"><FontAwesomeIcon icon="redo-alt" /></button>
        <button className="btn disabled"><FontAwesomeIcon icon="headphones-alt" /></button>
        <div className="likeUnLike">
        <button className="btn disabled"><FontAwesomeIcon icon="thumbs-up" /></button>0&nbsp;
        <button className="btn disabled"><FontAwesomeIcon icon="thumbs-down" /></button>0</div>
      </>
      );
    } else {
    return (
      <>
        <button onClick={this.props.handlePlay} className="btn"><FontAwesomeIcon icon="play-circle" /></button>
        <button onClick={this.props.handlePause} className="btn"><FontAwesomeIcon icon="pause-circle" /></button>
        <button onClick={this.props.handleIncreaseVolume} className="btn"><FontAwesomeIcon icon="plus-square" /></button>
        <button onClick={this.props.handleDecreaseVolume} className="btn"><FontAwesomeIcon icon="minus-square" /></button>
        <button onClick={this.props.handleReload} className="btn"><FontAwesomeIcon icon="redo-alt" /></button>
        <button onClick={this.props.handleMute} className="btn"><FontAwesomeIcon icon="headphones-alt" /></button>
        <div className="likeUnLike">
            <a onClick={this.props.handleLikes}><FontAwesomeIcon icon="thumbs-up" /></a> {this.props.selectedVideo.likes} &nbsp;
            <a onClick={this.props.handleUnLikes}><FontAwesomeIcon icon="thumbs-down" /></a> {this.props.selectedVideo.unlikes}
        </div>
      </>);
    }
  }
}
 
export default Controls;