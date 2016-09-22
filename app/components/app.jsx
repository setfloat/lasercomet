import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import photos from '../data/photos'

const mapStateToProps = (state) => {
  return {
    // insert states as to what we have, next two are examples
    photos: state.photos,
    searchResultsReducer: state.searchResultsReducer
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
