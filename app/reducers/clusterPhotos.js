import { push } from 'react-router-redux';

const clusterPhotos = (state = [], action) => {
  let turnip = action.clusterPhotos
  switch (action.type) {
    case 'RECEIVE_USER_CLUSTER': {
      return Object.assign({}, state, { userCluster: turnip.hits });
    }
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
