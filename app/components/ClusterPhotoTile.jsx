// individual photo of cluster as seen on individual cluster view.
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';

const styles = {
  div: {
    ':hover': {
      // backgroundColor: 'green'
    }
  },

  paper: {
    position: 'absolute',
    top: '3.5px',
    bottom: '3.5px',
    left: '3.5px',
    right: '3.5px',
    textAlign: 'center',
    margin: '0',
    ':hover': {
      zDepth: 5
    },
    background: 'url("images/oceanfill.jpg") center center / cover no-repeat'
  }

  // depthFind: {
  //
  //   ':onHover': 5
  // }
};

const ClusterPhotoTile = React.createClass({

  render() {
    // return <div
    //   style={styles.div}
    // >
    //   <Paper
    //     zDepth={5}
    //     style={styles.paper}
    //   >
    //
    //   </Paper>
    // </div>;
    return <div
      style={[styles.div, styles.paper]}
    ><Paper
      style={styles.paper}
      zDepth={5}
    >
      </Paper>
    </div>;
  }
});

export default Radium(ClusterPhotoTile);
