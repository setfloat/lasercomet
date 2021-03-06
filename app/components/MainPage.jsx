import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

const MainPage = React.createClass({
  componentWillMount() {
    this.props.retrieveAllClusters();
  },

  render() {
    return <div>
      <Hero
        clickedPhoto={this.props.clickedPhoto}
        fetchPhotos={this.props.fetchPhotos}
        photos={this.props.photos}
        searchResultsReducer={this.props.searchResultsReducer}
        searchText={this.props.searchText}
      />
      <Features />
      <Clusters
        fullClusters={this.props.fullClusters}
        getBrowseCluster={this.props.getBrowseCluster}
        photos={this.props.photos}
        retrieveAllClusters={this.props.retrieveAllClusters}
      />
    </div>;
  }
});

export default MainPage;
