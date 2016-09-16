import React from 'react';
import colors from 'components/Colors';
import Paper from 'material-ui/Paper'

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
    // background: 'url("images/dolphinfiller.jpg") center center / cover no-repeat',
    width: '100%',
    height: '30em',
  },
  feature: {
    display: 'inline-block',
    height: '85%',
    width: `28%`,
    boxSizing: 'border-box',
    position: 'relative',
    alignItems: 'space-around',
    backgroundColor: 'rgba(0,0,0,0)',
    margin: '10%, 4%, 10%, 4%'
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
        style={[styleHero.heroFlex, styleHero.feature]}
      >
        <div
          style={styleHero.info}
        >
          <Paper
            style={styleHero.feature}
          >
            Lorem Ipsum Textsum Brexit
          </Paper>
          <Paper
            style={styleHero.feature}
          >
            Lorem Ipsum Textsum Brexit
          </Paper>
          <Paper
            style={styleHero.feature}
          >
            Lorem Ipsum Textsum Brextsum
          </Paper>
        </div>
      </section>
    </div>;
  }
});

export default Hero;
