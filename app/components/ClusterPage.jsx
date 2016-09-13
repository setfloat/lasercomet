import ClusterTitleCard from 'components/ClusterTitleCard';
import PhotoTile from 'components/PhotoTile';
import React from 'react';

const ClusterPage = React.createClass({
  render() {
    const stylePhotoTile = {
      display: 'inline-block',
      height: '100px',
      width: '100px'
    };

    return <div>
      <ClusterTitleCard />
      <section>
        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>

        <div style={stylePhotoTile}>
          <PhotoTile />
        </div>



      </section>
    </div>;
  }
});

export default ClusterPage;
