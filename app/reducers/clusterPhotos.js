const clusterPhotos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER_CLUSTER': {
      return Object.assign({}, state, { userCluster: action.clusterPhotos });
    }
    case 'CLICK_TO_DELETE':
      console.log(action);
      let simplify = state.userCluster;
      simplify = simplify.map((photo) => {
        if (photo.pixid !== action.clusterPhotos) {
          return photo;
        }
        console.log(photo);
        return Object.assign({}, photo, { clicked: !photo.clicked }
        );
      });
      state.userCluster = simplify
      return state;

    default:
      return state;
  }
};


// const clusterPhotos = (state = [], action) => {
//   let turnip = action.clusterPhotos
//   switch (action.type) {
//     case 'RECEIVE_USER_CLUSTER': {
//       let resolution = new Promise((resolve) => {
//          resolve( Object.assign({}, state, { userCluster: turnip.hits }))
//        });
//       let rejection = new Promise((resolve, reject) => {
//         reject(err);
//       });
//       Promise.race([resolution, rejection])
//       .then((thing) => {
//         console.log(thing);
//
//         return push('/Cluster');
//       })
//       .catch((err) => {
//         console.log(err);
//         return state;
//       });
//       break;
//     }
//     default:
//       return state;
//   }
// };

export default clusterPhotos;
