import React from 'react';
import { withRouter } from 'react-router';

const notFound = {
  link: {
    textDecoration: 'none',
    color: 'green',
    cursor: 'pointer'
  }
};

const NotFound = React.createClass({
  handleRevertTouchTap() {
    this.props.router.push('/');
  },

  render() {
    return <div>
      <h1>Hmm, we can't find the page you requested.
      Why don't you go back to the
        <a
          onTouchTap={this.handleRevertTouchTap}
          style={notFound.link}
        >start
        </a>
      </h1>
    </div>;
  }
});

export default withRouter(NotFound);
