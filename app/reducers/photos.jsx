const photos = (state = [], action) => {
  switch (action.type) {
    case 'REQ_PHOTOS': {
      return state;
    }
    case 'RECEIVE_PHOTOS': {
      const i = action.index
      return [
        ...state.slice(0,i),
        ...state[i],
        ...state.slice(i + 1)
        // ...state, photos
      ];
      // state;
      // Object.assign({}, state, {
      //   photos: action.photos
      // });

      // state;


    }
    default:
      return state;
  }
};

export default photos;




// [
//   ...state.slice(0,i),
//   { ...state[i], saved: !state[i].saved },
//   ...state.slice(i + 1)
//   ...state, photos
// ];
