import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import all your reducers next
import photos from './photos';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers(
  {
    searchResultsReducer,
    photos,
    routing: routerReducer
  });

export default rootReducer;
