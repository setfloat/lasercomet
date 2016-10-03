const browseCluster = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BROWSE_CLUSTER': {
      return Object.assign({}, state, { browsed: action.browseCluster });
    }
    default:
      return state;
  }
};

export default browseCluster;
