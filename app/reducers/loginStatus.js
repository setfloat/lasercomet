const loginStatus = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN': {
      console.log('made it here');
      console.log(state);
      console.log(action.loginStatus);
      return action.loginStatus;
    }
    default:
      return state;
  }
};

export default loginStatus;
