import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Player extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = `.max-width-1024 { max-width: 1024px; margin: 0 auto; }`;
    
    return(<>
      <style>{style}</style>
      <div className="max-width-1024">
        <div className="embed-responsive embed-responsive-16by9" id="player">
        <p className="text-center">Please select a video</p>
        <ReactPlayer
                played={this.props.player.played}
                className='react-player'
                width='100%'
                height='100%'
                url={this.props.player.url}
                playing={this.props.player.playing}
                volume={this.props.player.volume}
                muted={this.props.player.muted}
                onPlay={this.props.handlePlay}
                onPause={this.props.player.handlePause}
                onProgress={this.props.handleProgress}
                onReady={this.props.handleOnReady}
                onSeek={this.props.handleReload}
                youtubeConfig={{ playerVars: {
                  controls: 0,
                  rel: 0,
                  showInfo: 0,
                  color : 'white',
                  fs : 0,
                  modestbranding : 1,
                  origin: 'http://localhost:4200',
                  autohide: 1
                } }}
              />
        </div>
      </div>
    </>);
  }
}
export default Player;