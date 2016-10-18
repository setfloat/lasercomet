import Joi from 'joi';
import React from 'react';
import TextField from 'material-ui/TextField';

const schema = Joi.object({
  email: Joi.string().trim().min(3).max(255),
  password: Joi.string().trim().min(8).max(255)
});

const styles = {
  headline: {
    fontSize: 36,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  loginContent: {
    fontSize: 24,
    maxWidth: '95%',
    padding: '5%'
  }
};

const Login = React.createClass({
  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  handleBlur(event) {
    const { name, value } = event.target;
    const nextErrors = Object.assign({}, this.state.errors);
    const result = Joi.validate({ [name]: value }, schema);

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
  },

  handleTouchTap() {
    this.props.acceptLogin(this.props.loginStatus);
  },

  render() {
    const styleFlexMain = {
      fontSize: 24,
      marginBottom: '50px'
    };

    const { login, errors } = this.state;
    const styleTextField = {
      display: 'block'
    };

    return <div style={styles.loginContent}>
      <h2 style={styles.headline}>Login</h2>
      <TextField

        // errorText={errors.email}
        floatingLabelText="Email"
        fullWidth={true}
        name="email"
        onBlur={this.handleBlur}
        onChange={this.props.handleLoginKeypress}
        style={styleTextField}
        value={this.state.email}
      />
      <TextField

        // errorText={errors.password}
        floatingLabelText="Password"
        fullWidth={true}
        name="password"
        onBlur={this.handleBlur}
        onChange={this.props.handleLoginKeypress}
        style={styleTextField}
        type="password"
        value={this.state.password}
      />
      <input
        onTouchTap={this.handleTouchTap}
        style={styleFlexMain}
        type="button"
        value="Login"
      />
    </div>;
  }
});

export default Login;
