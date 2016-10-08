import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import photos from '../data/photos'

const mapStateToProps = (state) => {
  return {
    // insert states as appear in the store.
    photos: state.photos,
    loginStatus: state.loginStatus,
    clusterPhotos: state.clusterPhotos,
    searchResultsReducer: state.searchResultsReducer,
    fullClusters: state.fullClusters,
    browseCluster: state.browseCluster
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
