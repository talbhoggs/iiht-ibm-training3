import React, { Component } from 'react';
import Player from './components/player/Player';
import PlayList from './components/playlist/PlayList';
import Controls from './components/controls/Controls';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getApprovedVideos } from "../../api/videoService";

import './PlayerPage.css';

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: {},
      player :{
        url: null,
        pip: false,
        playing: false,
        controls: false,
        light: true,
        volume: 1,
        muted: false,
        loaded: 0,
        duration: 0,
        loop: false,
        played : 0
      },
      playList: [],
      progressBar: 0
    };
  }

  componentDidMount() {
      getApprovedVideos().then(res => res.json())
        .then(playList => this.setState({ playList }));
  }

  handleSelectedVideo = (video, e) =>{
    let player = {...this.state.player, url: video.url};
    this.setState({...this.state.player, player});
  }

  handlePlay () {
    let player = {...this.state.player, playing: true};
    this.setState({...this.state.player, player});
  }

  handlePause () {
    let player = {...this.state.player, playing: false};
    this.setState({...this.state.player, player});
  }

  handleReload () {
    this.setState({
      played : 0
    });
    this.handlePlay();
  }

  handleEnded () {

  }

  handleMute() {
    const player = {...this.state.player, muted: !this.state.player.muted};
    this.setState({...this.state.player, player});
  }

  
  handleDecreaseVolume() {  
    let volume = this.state.player.volume;
    volume -= 0.2;
    if (volume <= 0) return;
    const player = {...this.state.player, volume: volume};
    this.setState({...this.state.player, player});
  }

  handleIncreaseVolume() {
    let volume = this.state.player.volume;
    volume += 0.2;
    if (volume >= 1) return;
    const player = {...this.state.player, volume: volume};
    this.setState({...this.state.player, player});
  }

  handleProgress = (s) => {
    console.log(s);
  }

  handleOnReady = state => {
    this.handlePlay();
  }


  render() { 
    const { playList } = this.state;
    return ( <>
       <Row>
          <Col sm={8}>
            <Player player={this.state.player} handleProgress={this.handleProgress} handleOnReady={this.handleOnReady}></Player>

            <Controls player={this.state.player} 
            handlePlay={this.handlePlay.bind(this)} 
            handlePause={this.handlePause.bind(this)}
            handleIncreaseVolume={this.handleIncreaseVolume.bind(this)}
            handleDecreaseVolume={this.handleDecreaseVolume.bind(this)}
            handleMute={this.handleMute.bind(this)}></Controls>
            <br />
            {this.state.player.playing}
            <progress id="progress-bar" max={1} value={this.state.player.load}></progress>
          </Col>
          <Col sm={4}>
            <PlayList playList={playList} handleSelectedVideo={this.handleSelectedVideo} />
          </Col>
        </Row>
    </> );
  }
}
 
export default PlayerPage;