// import Paper from 'material-ui/Paper';
import React from 'react';
import colors from 'components/Colors';

const styleHero = {
  heroFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroImg: {
    backgroundColor: 'blue',
    background: 'url("images/flyover.gif") center center / cover no-repeat',
    width: '100%',

    // backgroundPosition: 'center',
    height: '60vh'
  },
  infoSec: {
    height: '30vh',
    backgroundColor: '#4283fa'
  },
  info: {
    backgroundColor: colors.primeBoldTrans,

    // background: 'url("images/dolphinfiller.jpg")
    // center center / cover no-repeat',
    width: '100%',
    height: '30em'
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
    </div>;
  }
});

export default Hero;
