import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import all your reducers next
import clickedPhoto from './photos';
import clusterPhotos from './clusterPhotos';
import fullClusters from './fullClusters'
import loginStatus from './loginStatus';
import photos from './photos';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers(
  {
    clusterPhotos,
    loginStatus,
    searchResultsReducer,
    photos,
    fullClusters,

    // clickedPhoto,
    routing: routerReducer
  }
);

export default rootReducer;
