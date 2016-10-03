import { IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import ClusterPage from 'components/ClusterPage';
import Clusters from 'components/Clusters';
import Hero from 'components/Hero';
import MainPage from 'components/MainPage';
import NotFound from 'components/NotFound';
import React from 'react';
import BrowseClusterPage from 'components/BrowseClusterPage';
import ResultsPage from 'components/ResultsPage';
import UserAuth from 'components/UserAuth';
import { history } from '../store';

const Routes = React.createClass({
  render() {
    return <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={MainPage} />
        <Route component={MainPage} path="/">
          <Route component={Hero} path="/Hero" />
          <Route component={Clusters} path="/Clusters" />
        </Route>
        <Route component={ResultsPage} path="/Results" />
        <Route component={ClusterPage} path="/Cluster" />
        <Route component={UserAuth} path="login" />
        <Route component={BrowseClusterPage} path="/Browse" />
        <Route component={NotFound} path="*" />
      </Route>
    </Router>;
  }
});

export default Routes;
