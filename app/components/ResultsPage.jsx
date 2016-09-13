import React from 'react';
import Results from 'components/Results';
import ResultsHeader from 'components/ResultsHeader';

const ResultsPage = React.createClass({
  render() {
    return <div>
      <ResultsHeader />
      <Results />
    </div>;
  }
});

export default ResultsPage;
