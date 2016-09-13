import ClusterTitleCard from 'components/ClusterTitleCard';
import { GridList } from 'material-ui/GridList';
import PhotoTile from 'components/PhotoTile';
import React from 'react';

const ClusterPage = React.createClass({
  render() {
    const styles = {
      sRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },

      sGridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24
      },

      sPhotoTile: {
        display: 'inline-block',
        height: '200px',
        width: '200px',
        margin: '10px'
      },

      sClusterTitle: {
        width: 500,
        height: 100
      }
    };

    return <div>

      <ClusterTitleCard
        style={styles.sClusterTitle}
      />
      <div
        style={styles.sRoot}
      >
        <GridList
          style={styles.sGridList}
          cols={3}
        >
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
          <PhotoTile style={styles.sPhotoTile} />
        </GridList>
      </div>
    </div>;
  }
});

export default ClusterPage;
