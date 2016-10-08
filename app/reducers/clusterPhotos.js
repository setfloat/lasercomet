const clusterPhotos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER_CLUSTER': {
      return Object.assign({}, state, { userCluster: action.clusterPhotos });
    }
    case 'CLICK_TO_DELETE':
      let simplify = state.userCluster;

      simplify = simplify.map((photo) => {
        if (photo.pixid !== action.clusterPhotos) {
          return photo;
        }

        return Object.assign({}, photo, { clicked: !photo.clicked }
        );
      });
      state.userCluster = simplify;

      return state;
    default:
      return state;
  }
};

export default clusterPhotos;
