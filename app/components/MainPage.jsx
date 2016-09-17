import Clusters from 'components/Clusters';
import Features from 'components/Features';
import Hero from 'components/Hero';
import React from 'react';

const MainPage = React.createClass({
  render() {
    return <div>
      <Hero />
      <Features />
      <Clusters />
    Main Page</div>;
  }
});

export default MainPage;
