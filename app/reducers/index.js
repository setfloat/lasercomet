import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import all your reducers next
import clickedPhoto from './photos';
import loginStatus from './loginStatus';
import photos from './photos';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers(
  {
    loginStatus,
    searchResultsReducer,
    photos,
    // clickedPhoto,
    routing: routerReducer
  });

export default rootReducer;
