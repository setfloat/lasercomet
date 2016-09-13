import ClusterTile from 'components/ClusterTile';
import GridList from 'material-ui/GridList';
import React from 'react';

const Clusters = React.createClass({
  render() {
    return <section>
      <GridList>
        <ClusterTile />
        <ClusterTile />
        <ClusterTile />
        <ClusterTile />
        <ClusterTile />
        <ClusterTile />
      </GridList>
    </section>;
  }
});

export default Clusters;
