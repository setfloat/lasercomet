// import RaisedButton from 'material-ui/RaisedButton';
import NavBar from 'components/NavBar';
import React from 'react';
import { StyleRoot } from 'radium';
import cookie from 'react-cookie';

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
      this.setState({
        errorMessage: `Error: ${newError.response.data}`,
        showError: true
      });
    }
    else {
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
    const { getUserCluster } = this.props;

    return <StyleRoot>
      <div>
        <NavBar
          getUserCluster={getUserCluster}
        />
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
