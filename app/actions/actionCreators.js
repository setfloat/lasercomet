import axios from 'axios';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';


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

export const clickedPhoto = (photos) => {
  return {
    type: 'CLICKED_PHOTO',
    photos,
    index: event.target.i,
    photo: event.target
  };
}
export const savePhotoToDb = (photo) => {
  return (dispatch) => {
    axios.post('/api/cluster', photo)
      .then((res) => {
        console.log(res);
        // not sure what I want to occur next
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const loginKeypress = (event) => {
  console.log(event.target.value)
  return {
    type: 'LOGIN_KEYPRESS',
    name: event.target.name,
    value: event.target.value
  };
};

export const registerKeypress = (event) => {
  console.log(event.target.value)
  return {
    type: 'REGISTER_KEYPRESS',
    name: event.target.name,
    value: event.target.value
  };
};

export const receivePhotos = (photos) => {
  return {
    type: 'RECEIVE_PHOTOS',
    photos
  };
}

export const updateLogin = () => {
  return {
    type: 'UPDATE_LOGIN',
    loginStatus
  };
}

export const registerUser = (loginForm) => {
  return (dispatch) => {
    axios.post('/api/users', loginForm)
      .then((res) => {
        console.log(res);
        dispatch(loginUser(loginForm));
      })
      .catch((err) => {
        // this.updateErrorsMessage(err);
        console.log(err);
      })
  }
}

// "loginForm" may need to be built out or altered
export const loginUser = (loginForm) => {
  return (dispatch) => {
    console.log('hello');

    axios.post('/api/token', loginForm)
      .then((res) => {

        return dispatch(push('/'));
      })
      .catch((err) => {
        console.log(error);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    axios.delete('/api/token')
      .then(() => {
        return dispatch(push('/'));
      })
      .catch((err) => {
        console.log(error);
      });
  };
};

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

    return axios.post('/api/photos', { searchQuery })
      .then((res) => {
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
