import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap.superhero.min.css";
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux configurations
import configStore from './redux/store';
import { Provider } from 'react-redux';

//import "bootstrap/dist/css/bootstrap.superhero.min.css";

//
const store = configStore();

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
