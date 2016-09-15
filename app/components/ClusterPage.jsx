import ClusterTitleCard from 'components/ClusterTitleCard';
import { GridList } from 'material-ui/GridList';
import PhotoTile from 'components/PhotoTile';
import Radium from 'radium';
import React from 'react';

const ClusterPage = React.createClass({
  render() {
    const styles = {
      sRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      mediaQueries: {

        '@media screen and (min-width: 764px)': {
          maxWidth: '33%'
        },

        '@media screen and (min-width: 200px)': 1,
        '@media screen and (min-width: 400px)': 1,
        '@media screen and (min-width: 900px)': 3
      },

      sGridList: {
        width: 'viewport',
        height: 'viewport',
        overflowY: 'auto',
        marginBottom: 24
      },

      sPhotoTile: {
        display: 'inline-block',
        height: '100%',
        width: '50px'
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
          cellHeight={500}
          style={styles.sGridList}
        >
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
          <div style={styles.sPhotoTile} ><PhotoTile /></div>
        </GridList>
      </div>
    </div>;
  }
});

export default Radium(ClusterPage);
