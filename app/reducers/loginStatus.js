const loginStatus = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN': {
      const updateLogin = Object.assign({}, state.loginStatus, {

      })
      return action.loginStatus;
    }

    case 'LOGIN_KEYPRESS': {
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    }

    case 'REGISTER_KEYPRESS': {
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    }

    default:
      return state;
  }
};

export default loginStatus;
