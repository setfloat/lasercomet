import Clusters from 'components/Clusters';
import Hero from 'components/Hero';
import React from 'react';
import Features from 'components/Features';

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
