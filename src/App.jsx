
import './App.css';

import React, { Component } from 'react';

// react router
import { Redirect } from 'react-router';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/headers/Header';
import Container from 'react-bootstrap/Container';

// pages
import About from './pages/about/About';
import AddVideo from './pages/add-video/AddVideo';
import Player from './pages/player/PlayerPage';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPlusCircle, faPlayCircle, faTrashAlt, faEdit, faListAlt, faPauseCircle, faPlusSquare,faMinusSquare, faRedoAlt, faHeadphonesAlt, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faPlusCircle, faPlayCircle, fab, faTrashAlt, faEdit, faListAlt, faPauseCircle, faPlusSquare,faMinusSquare, faRedoAlt, faHeadphonesAlt, faThumbsDown, faThumbsUp);

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() { 
    return (
    <Router>
    <div className="App">
      <Header></Header>
      <Container className="Container">
          <Switch>
            <Route exact path="/" component={Player} />
            <Route path='/about' component={About} />
            <Route path='/add-video' component={AddVideo} />
            <Route path='/player' component={Player} />
            <Redirect to="/" />
          </Switch>
      </Container>
    </div>
    </Router>
    );
  }
}
 
export default App;