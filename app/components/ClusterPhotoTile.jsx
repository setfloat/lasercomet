// individual photo tile returned on Results page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const ClusterPhotoTile = React.createClass({
  handleTouchTap() {
    this.props.clickToDelete(this.props.photo.pixid);
  },

  handleButtonTouchTap() {
    this.props.deletePhoto(this.props.photo);
  },

  render() {
    const { photo, i } = this.props;
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
      },

      deleteButton: {
        ':active': {
          backgroundColor: colors.thirdMain
        }
      }
    };

    return <div
      style={
        styles.paper
      }
    >
      <Paper
        onTouchTap={this.handleTouchTap}
        style={styles.paper}
        zDepth={4}
      >
        {(() => {
          switch (this.props.photo.clicked) {
            case true: return <button
              key={i}
              onTouchTap={this.handleButtonTouchTap}
              style={styles.deleteButton}
            >Delete from Cluster</button>;
            case false: return null;
            default: return false;
          }
        })()
        }
      </Paper>
    </div>;
  }
});

export default Radium(ClusterPhotoTile);
