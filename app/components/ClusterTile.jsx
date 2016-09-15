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
    top: '1.5px',
    bottom: '1.5px',
    left: '1.5px',
    right: '1.5px',
    textAlign: 'center',
    margin: '0',
    ':hover': {
      zDepth: 5
    }
  }

  // depthFind: {
  //
  //   ':onHover': 5
  // }
};

const ClusterTile = React.createClass({

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
      // zDepth={styles.depthFind}
    >

      <h4>Cluster Tile</h4>
      </Paper>
    </div>;
  }
});

export default Radium(ClusterTile);
