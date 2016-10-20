import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';

const BrowseTile = React.createClass({
  render() {
    const { photo } = this.props;
    const styles = {
      paper: {
        position: 'absolute',
        top: '4px',
        bottom: '4px',
        left: '4px',
        right: '4px',
        textAlign: 'center',
        margin: '0',
        ':hover': {
          zDepth: 5
        },

        background: `url(${photo.webformatURL}) center center / cover no-repeat`
      }
    };

    return <div
      style={styles.paper}
    >
      <Paper
        style={styles.paper}
        zDepth={4}
      />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(BrowseTile);
