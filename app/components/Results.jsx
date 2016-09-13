import { GridList } from 'material-ui/GridList';
import PhotoTile from 'components/PhotoTile';
import React from 'react';

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
  }
};

const Results = React.createClass({
  render() {
    return <div>
      <GridList
        cellheight={200}
        style={styles.gridList}
      >
        <PhotoTile />
        <PhotoTile />
        <PhotoTile />
        <PhotoTile />
      </GridList>
    </div>;
  }
});

export default Results;
