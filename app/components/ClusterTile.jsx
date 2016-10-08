// view of main cluster photo shown on cluster view of main page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';



const ClusterTile = React.createClass({
  handleTouchTap() {
    this.props.getBrowseCluster(this.props.photo);
  },

  render() {
    const { photo, i, getBrowseCluster } = this.props;
    const styles = {
      paper: {
        position: 'absolute',
        top: '4px',
        bottom: '4px',
        left: '4px',
        right: '4px',
        textAlign: 'center',
        margin: '0',
        background: `url(${photo.webformatURL}) center center / cover no-repeat`,
        ':hover': {
          zDepth: 5
        }
      }
    };

    return <div style={styles.paper}>
      <Paper
        onTouchTap={this.handleTouchTap}
        style={styles.paper}
        zDepth={4}
      />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(ClusterTile);
