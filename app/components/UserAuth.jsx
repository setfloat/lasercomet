import { Tab, Tabs } from 'material-ui/Tabs';
import Login from 'components/Login';
import Paper from 'material-ui/Paper';
import React from 'react';
import Register from 'components/Register';
import axios from 'axios';
import { withRouter } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  loginForm: {
    width: '100%'
  },
  tabponent: {
    marginTop: '50',
    marginLeft: '50',
    marginRight: '50',
    paddingBottom: '40',
    maxWidth: '700',
    width: 'viewPort',
    alignContent: 'centerAlign'
  }
};

const UserAuth = React.createClass({
  // componentWillMount() {
  //   if (this.props.userAuth.loggedIn.loginStatus.loggedIn) {
  //     this.props.router.push('/')
  //   }
  // },

  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        confirm: ''
      },
      errors: {}
    };
  },

  acceptLogin(nextLogin) {
    console.log(nextLogin, 'nextloginbro');
    axios.post('/api/token', nextLogin)
      .then((_res) => {
        this.setState({ login: {}, register: {}});
        this.props.updateLogin();
        // this.props.updateNotification('Login successful');
        this.props.router.push('/');
      })
      .catch((err) => {
        this.props.updateErrorMessage(err);
      });
  },

  acceptRegister(nextRegister) {
    console.log(nextRegister);
    axios.post('/api/users', nextRegister)
      .then((_res) => {
        // this.props.updateNotification('Registration successful');
        this.acceptLogin(nextRegister);
      })
      .catch((err) => {
        this.updateErrorMessage(err);
      });
  },

  render() {
    return <div>
      <Paper style={styles.tabponent} zDepth={5}>
        <Tabs>
          <Tab data-route="/Login" label="Login">
            <div style={styles.loginForm}>
              <Login
                acceptLogin={this.acceptLogin}
                errors={this.state.errors}
                loginKeypress={this.props.loginKeypress}
                userInfo={this.state.login}
                loginStatus={this.props.loginStatus}

              />
            </div>
          </Tab>
          <Tab data-route="/Register" label="Register">
            <div style={styles.loginForm}>
              <Register
                acceptRegister={this.acceptRegister}
                errors={this.state.errors}
                registerKeypress={this.props.registerKeypress}
                registerUser={this.props.registerUser}
                userInfo={this.state.register}
                loginStatus={this.props.loginStatus}
              />
            </div>
          </Tab>
        </Tabs>
      </Paper>
    </div>;
  }
});

export default withRouter(UserAuth);
