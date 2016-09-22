// results of search view, shows header and results
import React from 'react';
import Results from 'components/Results';
import ResultsHeader from 'components/ResultsHeader';
const ResultsPage = React.createClass({
  render() {
    return <div>
      <ResultsHeader
        fetchPhotos={this.props.fetchPhotos}
        searchResultsReducer={this.props.searchResultsReducer}
        searchText={this.props.searchText}
      />
      <Results
        fetchPhotos={this.props.fetchPhotos}
        searchResultsReducer={this.props.searchResultsReducer}
        searchText={this.props.searchText}
        photos={this.props.photos}
      />
    </div>;
  }
});

export default ResultsPage;
