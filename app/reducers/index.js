import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import all your reducers next
import photos from './photos';
import searchText from './searchResultsReducer';

const rootReducer = combineReducers(
  {
    searchText,
    photos,
    routing: routerReducer
  });

export default rootReducer;
