import React from 'react';

const styleHero = {
  heroFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroImg: {
    backgroundColor: 'blue',

    // backgroundImage: 'url("assets/images/dolphinfiller.jpg")',
    // backgroundSize: 'cover',
    background: 'url("images/flyover.gif") center center / cover no-repeat',
    width: '100%',

    // backgroundPosition: 'center',
    height: '60vh'
  },
  infoSec: {
    height: '30vh',
    backgroundColor: '#4283fa'
  }
};

const Hero = React.createClass({
  render() {
    return <div>
      <section
        style={styleHero.heroFlex}
      >
        <div
          style={styleHero.heroImg}
        />
      </section>
      <section
        style={[styleHero.heroFlex, styleHero.infoSec]}
        height={'100px'}
      >
        <div
        height={'100px'}
        >
        Oi, Boludo
        </div>
      </section>
    </div>;
  }
});

export default Hero;
