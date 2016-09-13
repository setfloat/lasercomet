import { GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import React from 'react';

const PhotoTile = React.createClass({
  render() {
    const stylePaper = {
      backgroundColor: 'blue',
      display: 'inline-block'
    };

    const styleImage = {
      width: '649px',
      height: '649px'
    };

    return <div>
      <GridTile>
        <Paper
          style={stylePaper}
        >
          <img
            src="../images/dolphinfiller.jpg"
            style={styleImage}
          />
        </Paper>
      </GridTile>
    </div>;
  }
});

export default PhotoTile;
