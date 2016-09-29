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
        top: '3.5px',
        bottom: '3.5px',
        left: '3.5px',
        right: '3.5px',
        textAlign: 'center',
        margin: '0',
        ':hover': {
          zDepth: 5
        },

        // background: `url(${photo.webformaturl}) center center / cover no-repeat`
        background: `url(${photo.webformatURL}) center center / cover no-repeat`

        // background: 'url("images/oceanfill.jpg") center center / cover
        // no-repeat'
      },

      saveButton: {
        ':active': {
          backgroundColor: colors.thirdMain
        }
      }
      // depthFind should work now, just need to appropriate choose
      // on the zDepth below where used. ternary?
      // depthFind: {
      //   ':hover': 1
      // },
    };

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
      >{(() => {
        switch (this.props.photo.clicked) {
          case true: return <button style={styles.saveButton} onTouchTap={this.buttonTouchTap} key={i}>Save to Cluster</button>;
          case false: return null;
          default: false;
        }
      })()
      }</Paper>
    </div>;
  }
});

export default Radium(ResultTile);

/*
<div
 style={[styles.div, styles.paper]}
>
 <Paper
   style={styles.paper}
   zDepth={5}
 />
</div>;
}
});

export default Radium(ResultTile);
*/
