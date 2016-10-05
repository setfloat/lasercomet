// individual photo tile returned on Results page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const ResultTile = React.createClass({
  handleTouchTap() {
    this.props.clickedPhoto(this.props.photo.pixid);
  },

  buttonTouchTap() {
    console.log('hello');
    this.props.savePhotoToDb(this.props.photo);
  },

  render() {
    const { photo, i, clickedPhoto } = this.props;
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

      saveButton: {
        background: `none repeat  0 0 ${colors.secondSoftTrans}`,
        border: `1px solid ${colors.secondSoftTrans}`,
        borderSpacing: '0',
        // color: colors.thirdAlt,
        color: 'black',
        fontSize: '1rem',
        lineHeight: '1.42rem',
        textDecoration: 'none',
        ':active': {
          backgroundColor: colors.primeMainTrans

        }
      }
    };

    return <div
      style={[
        // styles.div,
        styles.paper
      ]}
    >
      <Paper
        index={i}
        onTouchTap={this.handleTouchTap}
        style={styles.paper}
        zDepth={4}
      >
        {(() => {
          switch (this.props.photo.clicked) {
            case true: return <button style={styles.saveButton}
            onTouchTap={this.buttonTouchTap} key={i}>Save to Cluster</button>;
            case false: return null;
            default: false;
          }
        })()
        }
      </Paper>
    </div>;
  }
});

export default Radium(ResultTile);
