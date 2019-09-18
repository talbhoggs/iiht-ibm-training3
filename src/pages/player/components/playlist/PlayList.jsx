import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PlayList.css';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    const { playList, handleSelectedVideo } = this.props;
    return (<>
    <h3><FontAwesomeIcon icon="list-alt" /> My Playlist</h3>
    <ul className="list-group list-group-flush">
    {playList.map((item) => (
      <li key={item.id} className="list-group-item list-group-item-action"><a onClick={handleSelectedVideo.bind(this, item)}><FontAwesomeIcon icon="play-circle" /> {item.title}</a></li>
    ))}
    </ul>
    </>);
  }
}
export default PlayList;