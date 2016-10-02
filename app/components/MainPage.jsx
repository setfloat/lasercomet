import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

const MainPage = React.createClass({
  render() {
    // console.log(this.props);
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
        retrieveAllClusters={this.props.retrieveAllClusters}
        photos={this.props.photos}
      />
    Main Page</div>;
  }
});

export default MainPage;
