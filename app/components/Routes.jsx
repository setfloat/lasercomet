import { IndexRoute, Route, Router } from 'react-router';
import App from './App';
import BrowseClusterPage from './BrowseClusterPage';
import ClusterPage from './ClusterPage';
import Clusters from './Clusters';
import Hero from './Hero';
import MainPage from './MainPage';
import NotFound from './NotFound';
import React from 'react';
import ResultsPage from './ResultsPage';
import UserAuth from './UserAuth';
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
