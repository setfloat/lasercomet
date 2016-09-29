// individual photo tile returned on Results page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';


const ResultTile = React.createClass({
  handleTouchTap() {
    this.props.clickedPhoto(this.props.photo.pixid);
    // this.props.toggledButtonToggler(this.props.photo.clicked, this.props.photo, this.props.i)
  },

  buttonTouchTap() {
    console.log('hello');
    this.props.savePhotoToDb(this.props.photo.pixid);
  },

  render() {
    const { photo, i, clickedPhoto } = this.props;
    const styles = {
      // div: {
      //   ':hover': {
      //     backgroundColor: 'yellow'
      //   }
      // },

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

      depthFind: {
        ':onHover': 1
      }
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
        zDepth={5}
      >{(() => {
        switch (this.props.photo.clicked) {
          case true: return <button onTouchTap={this.buttonTouchTap} key={i}>Save to Cluster</button>;
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
