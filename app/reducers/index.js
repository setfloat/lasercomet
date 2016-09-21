import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import all your reducers next
import photos from './photos';

const rootReducer = combineReducers({ photos, routing: routerReducer });

export default rootReducer;
