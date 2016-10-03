import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import photos from './data/photos';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import cookie from 'react-cookie';

let loginStatus = {
  email: '',
  password: ''
  // loggedIn: cookie.load('loggedIn') || false,
  // user: {
  //   userId: cookie.load('userId') || null,
  //   email: cookie.load('email') || null
  // }
};

let clusterPhotos = [];
let fullClusters = [];

// import whateverthisis from './data/thisisthedatafile';

const enhancers = compose(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)),
    window.devToolsExtension
      ? window.devToolsExtension() : f => f
);

// create an object for the default data
const defaultState = {
  photos,
  loginStatus,
  clusterPhotos,
  fullClusters
};

let store = createStore(
  rootReducer,
  defaultState,
  enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
