// import RaisedButton from 'material-ui/RaisedButton';
import NavBar from 'components/NavBar';
import React from 'react';
import { StyleRoot } from 'radium';
import { withRouter } from 'react-router';

const App = React.createClass({
  render() {
    // return <RaisedButton label="Hello world" />;
    return <StyleRoot>
      <div>
        <NavBar />
        {/* <h2>LaserComet</h2> */}
        {React.cloneElement(this.props.children, {})}
      </div>
    </StyleRoot>;
  }
});

export default withRouter(App);
