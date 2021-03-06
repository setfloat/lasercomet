import axios from 'axios';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';


// should add searchQuery into the argument of callback below
export const requestPhotos = (photos) => {
  return {
    type: 'REQ_PHOTOS',
    photos
  };
}

export const retrieveAllClusters = (dispatch) => {
  return (dispatch) => {
    axios.get('/api/clusters')
      .then((res) => {
        return dispatch(receiveFullClusters(res.data))
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const receiveFullClusters = (fullClusters) => {
  return {
    type: 'RECEIVE_FULL_CLUSTERS',
    fullClusters
  }
}

export const clickedPhoto = (photos) => {
  return {
    type: 'CLICKED_PHOTO',
    photos,
    index: event.target.i,
    photo: event.target
  };
}

export const clickToDelete = (clusterPhotos) => {
  return {
    type: 'CLICK_TO_DELETE',
    clusterPhotos,
    index: event.target.i,
    photo: event.target
  };
}

export const deletePhoto = (photo) => {
  console.log('made it here');

  return (dispatch) => {
    console.log(photo);
    axios({
      method: 'post',
      url: '/api/cluster',
      data: {
        photo: photo
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const savePhotoToDb = (photo) => {

  return (dispatch) => {
    axios.post('/api/cluster', photo)
      .then((res) => {
        // not sure what I want to occur next
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const callUserCluster = (clusterPhotos) => {
  return {
    type: 'RECEIVE_USER_CLUSTER',
    clusterPhotos
  }
}

export const callBrowseCluster = (browseCluster) => {
  return {
    type: 'RECEIVE_BROWSE_CLUSTER',
    browseCluster
  }
}

export const receiveBrowseCluster = (browseCluster, dispatch) => {
  return dispatch(callBrowseCluster(browseCluster));
}


export const receiveUserCluster = (clusterPhotos, dispatch) => {
  return dispatch(callUserCluster(clusterPhotos));
}

export const getBrowseCluster = (rec) => {

  return (dispatch) => {
    return axios.post('/api/browseCluster', {rec})
      .then((res) => {
        return dispatch(receiveBrowseCluster(res.data, dispatch));
      })
      .then(() => {
        dispatch(push('/Browse'));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const getUserCluster = () => {
  return (dispatch) => {
    return axios.get('/api/cluster')
      .then((res) => {

        return dispatch(receiveUserCluster(res.data, dispatch));
        // return res.data;
      })
      .then(() => {
        dispatch(push('/Cluster'));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


export const handleLoginKeypress = (event) => {
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
