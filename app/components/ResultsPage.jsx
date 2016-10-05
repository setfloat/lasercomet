// results of search view, shows header and results
import React from 'react';
import Results from 'components/Results';
import ResultsHeader from 'components/ResultsHeader';
const ResultsPage = React.createClass({
  render() {
    return <div>
      <section>
        <ResultsHeader
          fetchPhotos={this.props.fetchPhotos}
          searchResultsReducer={this.props.searchResultsReducer}
          searchText={this.props.searchText}
        />
      </section>
      <section>
        <Results
          clickedPhoto={this.props.clickedPhoto}
          fetchPhotos={this.props.fetchPhotos}
          photos={this.props.photos}
          savePhotoToDb={this.props.savePhotoToDb}
          searchResultsReducer={this.props.searchResultsReducer}
          searchText={this.props.searchText}
        />
      </section>
    </div>;
  }
});

export default ResultsPage;
