import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

let waitGate;

const MainPage = React.createClass({
  componentWillMount() {
    this.props.retrieveAllClusters();
  },

  handleTouchTap() {
    waitGate = (<Clusters
      retrieveAllClusters={this.props.retrieveAllClusters} photos={this.props.photos} />);
  },

  render() {
    console.log(this.props);
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
      {/* <Clusters
        retrieveAllClusters={this.props.retrieveAllClusters}
        photos={this.props.photos}
      /> */}
      {waitGate}
      <button
        onTouchTap={this.handleTouchTap}
      >Check out some clusters</button>
    Main Page</div>;
  }
});

export default MainPage;
