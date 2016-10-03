const fullClusters = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_FULL_CLUSTERS': {
      console.log(action.fullClusters);
      return Object.assign({}, state, { clusteredCache: action.fullClusters});
    }
    default:
      return state;
  }
}


export default fullClusters;

// probably some major errors here, unsure of how to address
// issue with multiple clusters


// keep this code, commenting to make program work

// const clusters = (state = [], action) => {
//   switch (action.type) {
//     case 'REQ_CLUSTERS': {
//       return state;
//     }
//     case 'RES_CLUSTERS': {
//       const i = action.index;
//       return [
//         ...state.slice(0,i),
//         { ...state.clusters[i], cluster: state.clusters[i].cluster },
//         ...state.slice(i + 1)
//       ]
//     }
//     default:
//       return state;
//   }
// }
