import axios from 'axios';

// increment action
// add photo
// remove photo

// export function increment(index) {
//   return {
//     type: 'INCREMENT_LIKES',
//     index
//   }
// }

// export function addComment(postId, author, comment) {
//   return {
//     type: 'ADD_COMMENT',
//     postId,
//     author,
//     comment
//   }
// }

// export function removeComment(postId, index) {
//   return {
//     type: 'REMOVE_COMMENT',
//     index,
//     postId
//   }
// }

// should add searchQuery into the argument of callback below
export function reqPhotos() {
  return {
    type: 'REQ_PHOTOS'
  };
}

export function resPhotos(photos) {
  return {
    type: 'RES_PHOTOS',
    photos
  };
}

export function searchResultPhotos(searchResults) {
  return {
    type: 'SEARCH_RESULT_PHOTOS',
    searchResults
  };
}

export function fetchPhotos(searchQuery) {
  return (dispatch) => {
    dispatch(reqPhotos());

    return axios.get('/api/photos')
      .then((res) => {
        dispatch();

        return res.data;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  };
}
