// individual photo tile returned on Results page
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const ClusterPhotoTile = React.createClass({
  handleTouchTap() {
    console.log(this.props.photo);
    this.props.clickToDelete(this.props.photo.pixid);
  },

  buttonTouchTap() {
    console.log(this.props.photo);
    this.props.deletePhoto(this.props.photo);
  },

  render() {
    const { photo, i, clickedPhoto, clickToDelete } = this.props;
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
            case true: return <button style={styles.deleteButton} onTouchTap={this.buttonTouchTap} key={i}>Delete from Cluster</button>;
            case false: return null;
            default: false;
          }
        })()
        }
      </Paper>
    </div>;
  }
});

export default Radium(ClusterPhotoTile);

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










// // individual photo of cluster as seen on individual cluster view.
// import Paper from 'material-ui/Paper';
// import Radium from 'radium';
// import React from 'react';
//
// const styles = {
//   div: {
//     ':hover': {
//       // backgroundColor: 'green'
//     }
//   },
//
//   paper: {
//     position: 'absolute',
//     top: '3.5px',
//     bottom: '3.5px',
//     left: '3.5px',
//     right: '3.5px',
//     textAlign: 'center',
//     margin: '0',
//     ':hover': {
//       zDepth: 5
//     },
//     background: 'url("images/oceanfill.jpg") center center / cover no-repeat'
//   }
//
//   // depthFind: {
//   //
//   //   ':onHover': 5
//   // }
// };
//
// const ClusterPhotoTile = React.createClass({
//
//   render() {
//     // return <div
//     //   style={styles.div}
//     // >
//     //   <Paper
//     //     zDepth={5}
//     //     style={styles.paper}
//     //   >
//     //
//     //   </Paper>
//     // </div>;
//     return <div
//       style={[styles.div, styles.paper]}
//     ><Paper
//       style={styles.paper}
//       zDepth={5}
//     >
//       </Paper>
//     </div>;
//   }
// });
//
// export default Radium(ClusterPhotoTile);
