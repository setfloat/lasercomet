import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import photos from './data/photos';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import cookie from 'react-cookie';
import { retrieveAllClusters } from './actions/actionCreators'

let loginStatus = {
  email: '',
  password: ''
};
let fullClusters = { clusteredCache: photos }
let clusterPhotos = [];
let browseCluster = { browsed: photos }

const enhancers = compose(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)),
    window.devToolsExtension
      ? window.devToolsExtension() : f => f
);

// create an object for the default data
const defaultState = {
  photos,
  loginStatus,
  clusterPhotos,
  fullClusters,
  browseCluster
};

let store = createStore(
  rootReducer,
  defaultState,
  enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
