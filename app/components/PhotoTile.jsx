import { GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import React from 'react';

const PhotoTile = React.createClass({
  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },

      gridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24
      },

      stylePaper: {
        backgroundColor: 'blue',
        margin: 'auto'

        // display: 'inline-block'
      },

      styleImage: {
        width: '95%',
        height: '95%'
      },

      styleDiv: {
        margin: 'auto'
      }
    };

    return <div
      style={styles.styleDiv}
    >
      <GridTile>
        <Paper
          style={styles.stylePaper}
        >
          <img
            src="../images/dolphinfiller.jpg"
            style={styles.styleImage}
          />
        </Paper>
      </GridTile>
    </div>;
  }
});

// eslint-disable-next-line
export default PhotoTile;
