// import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import React from 'react';


const App = React.createClass({
  render() {
    // return <RaisedButton label="Hello world" />;
    return <div>
      <h2>LaserComet</h2>
      {React.cloneElement(this.props.children, {})}
    </div>;
  }
});

export default withRouter(App);
