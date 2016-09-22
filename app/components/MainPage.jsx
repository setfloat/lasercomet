import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

const MainPage = React.createClass({
  render() {
    console.log(this.props);
    return <div>
      <Hero
        searchText={this.props.searchText}
        fetchPhotos={this.props.fetchPhotos}
        searchResultsReducer={this.props.searchResultsReducer}
      />
      <Features />
      <Clusters />
    Main Page</div>;
  }
});

export default MainPage;
