const photos = (state = [], action) => {
  switch (action.type) {
    case 'REQ_PHOTOS': {
      return state;
    }
    case 'RES_PHOTOS': {
      return state;

      // code below i want to comment back in.
      // [
      //   ...state, photos
      // ];

      // Object.assign({}, state, {
      //   photos: action.photos
      // });
    }
    default:
      return state;
  }
};

export default photos;
