import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from 'components/App';
import ClusterPage from 'components/ClusterPage';
import Clusters from 'components/Clusters';
import Hero from 'components/Hero';
import MainPage from 'components/MainPage';
import React from 'react';
import ResultsPage from 'components/ResultsPage';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={MainPage} />
        <Route component={MainPage} path="/">
          <Route component={Hero} path="/Hero" />
          <Route component={Clusters} path="/Clusters" />
        </Route>
        <Route component={ResultsPage} path="/Results">
          {/* contains page view for results cards */}
        </Route>
        <Route component={ClusterPage} path="/Cluster" />
      </Route>
    </Router>;
  }
});

export default Routes;
