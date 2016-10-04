// view of main cluster photo shown on cluster view of main page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';



const ClusterTile = React.createClass({
  handleTouchTap() {
    console.log(this.props);
    this.props.getBrowseCluster();
  },

  render() {
    const { photo, i, getBrowseCluster } = this.props;
    // console.log(photo);
    const styles = {
      div: {
        ':hover': {

          // backgroundColor: 'green'
        }
      },

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
        },
        // background: 'url("images/oceanfill.jpg") center center / cover no-repeat',
      }

      // depthFind: {
      //
      //   ':onHover': 5
      // }
    };

    return <div
      style={[
        // styles.div,
        styles.paper]}
    ><Paper
      // index={i}
      onTouchTap={this.handleTouchTap}
      style={styles.paper}
      zDepth={4}
    >
      {/* {(() => {
        switch (this.props.photo.clicked) {
          case true: return <button style={styles.saveButton}
          onTouchTap={this.buttonTouchTap} key={i}>Save to Cluster</button>;
          case false: return null;
          default: false;
        }
      })()
      } */}
    </Paper>
    </div>;
  }
});

export default Radium(ClusterTile);
