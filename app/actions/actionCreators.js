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
export const requestPhotos = (photos) => {
  return {
    type: 'REQ_PHOTOS',
    photos
  };
}

// this uses thunk
// export const fetchPhotos = (searchQuery) => {
//   return (dispatch) => {
//
//   }
// }


export const receivePhotos = (photos) => {
  return {
    type: 'RECEIVE_PHOTOS',
    photos
  };
}

export const logIn = ( notsurewhatgoeshereyet) => {
  return {
    type: 'LOGIN',
    notsurewhatwhatgoeshereyet
  }
}

export const logOut = ( alsonotsurewhatgoeshereyet ) => {
  return {
    type: 'LOGOUT',
    alsonotsurewhatgoeshereyet
  }
}

export const searchText = (searchText) => {
  return {
    type: 'SEARCH_TEXT',
    searchText
  }
}

// export function searchResultPhotos(searchResults) {
//   return {
//     type: 'SEARCH_RESULT_PHOTOS',
//     searchResults
//   };
// }
// has no reducer, when dispatch resPhotos it triggers reducer
export function fetchPhotos(searchQuery) {
  return (dispatch) => {
    dispatch(requestPhotos());
    console.log('hello')
    console.log(searchQuery);
    return axios.post('/api/photos', { searchQuery })
      .then((res) => {
        console.log('res made it here');
        console.log(res);
        console.log(res.data);
        dispatch(receivePhotos(res.data));

        return res.data;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log('we ended up here');
        console.log(err);
      });
  };
}