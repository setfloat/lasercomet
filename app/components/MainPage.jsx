import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

let waitGate;

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
        getBrowseCluster={this.props.getBrowseCluster}
        fullClusters={this.props.fullClusters}
        retrieveAllClusters={this.props.retrieveAllClusters}
        photos={this.props.photos}
      />
    </div>;
  }
});

export default MainPage;
