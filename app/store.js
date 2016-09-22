import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import photos from './data/photos';
import thunk from 'redux-thunk';


// import whateverthisis from './data/thisisthedatafile';

const enhancers = compose(
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
);

// create an object for the default data
const defaultState = {
  photos
};

let store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
