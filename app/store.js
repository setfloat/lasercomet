import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import photos from './data/photos';

// consider adding thunk middleware here.
// const photos = {
//   hello: 'hello'
// };

// import whateverthisis from './data/thisisthedatafile';

const enhancers = compose(
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
);

// create an object for the default data
const defaultState = {
  photos
}

let store = createStore(rootReducer, defaultState, enhancers);
  // alternative to enhancers is the apply middlware

//   applyMiddleware(
//   //whatever those middlewares are
//   )
// );

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
