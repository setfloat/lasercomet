const photos = (state = [], action) => {
  switch (action.type) {
    case 'REQ_PHOTOS': {
      return state;
    }
    case 'RECEIVE_PHOTOS': {
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
