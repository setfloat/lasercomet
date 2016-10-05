const photos = (state = [], action) => {
  switch (action.type) {
    case 'REQ_PHOTOS': {
      return state;
    }
    case 'RECEIVE_PHOTOS': {

      // console.log(state);
      // const i = action.index
      // console.log(state, 'hello123l12j');
      // console.log(i, 'rheolaleey this is the i 823049823094823');
      // console.log(photos, '23098423094823');
      // return [
      //   ...state.slice(0,i),
      //   ...state[i],
      //   ...state.slice(i + 1)
      //   // ...state, photos
      // ];
      // state;
      // Object.assign({}, state, {
      //   photos: action.photos
      // });

      // state;

      return action.photos;
    }

    case 'CLICKED_PHOTO':
      return state.map((photo) => {
        if (photo.pixid !== action.photos) {
          return photo;
        }

        return Object.assign({}, photo, { clicked: !photo.clicked }
        );
      });

    default:
      return state;
  }
};

export default photos;
