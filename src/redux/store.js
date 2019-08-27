import { createStore, applyMiddleware } from 'redux';

import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

export default function configStore(state) {
  return createStore(rootReducers, state, applyMiddleware(thunk));
};