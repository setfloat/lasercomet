// import RaisedButton from 'material-ui/RaisedButton';
import NavBar from 'components/NavBar';
import React from 'react';
import { StyleRoot } from 'radium';
import cookie from 'react-cookie';
// import { withRouter } from 'react-router';


const Main = React.createClass({
  getInitialState() {
    return {
      loggedIn: cookie.load('loggedIn'),
      errorMessage: '',
      showError: false,
      notification: '',
      showNotification: false
    };
  },

  updateErrorMessage(newError) {
    if (newError.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      this.setState({
        errorMessage: `Error: ${newError.response.data}`,
        showError: true
      });
    }
    else {
      // Something happened in setting up the request that triggered an Error
      this.setState({
        errorMessage: `Error: ${newError.message}`,
        showError: true
      });
    }
  },

  updateLogin() {
    this.setState({ loggedIn: cookie.load('loggedIn') });

    if (!this.state.loggedIn) {
      this.props.router.push('/');
    }
  },

  render() {
    console.log(this.props)
    // return <RaisedButton label="Hello world" />;
    return <StyleRoot>
      <div>
        <NavBar />
        {/* <h2>LaserComet</h2> */}
        {React.cloneElement(this.props.children,
          this.props

        //   {
          // loggedIn: this.state.loggedIn,
          // updateErrorMessage: this.updateErrorMessage,
          // updateLogin: this.updateLogin,
          // updateNotification: this.updateNotification

        // }
      // }
      )}
      </div>
    </StyleRoot>;
  }
});

export default Main;
// withRouter(App);
