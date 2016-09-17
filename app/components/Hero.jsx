// import Paper from 'material-ui/Paper';
import React from 'react';
import colors from 'components/Colors';
import Radium from 'radium';

const styleHero = {
  heroFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroImg: {
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
  },
  search: {
    // padding: '20%'
  },
  searchField: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: colors.secondSoft,
    borderWidth: '0 0 2px 0',
    ':focus': {
      color: 'white',
      // backgroundColor: 'rgba(0,0,0,0.3)',
      borderColor: colors.thirdMain,
      borderWidth: '0 0 2px 0',
      outline: 'none'
    },
    ':active': {
      backgroundColor: 'rgba(0,0,0,0.6)'
    },

    // borderRadius: '4px'
  }
};

const Hero = React.createClass({
  render() {
    return <div>
      <section style={styleHero.heroFlex} >
        <div style={styleHero.heroImg} >
          <img
            height={'50em'}
            src={'images/search.svg'}
            style={styleHero.search}
          />
          <input
            style={styleHero.searchField}
          />
        </div>
      </section>
    </div>;
  }
});

export default Radium(Hero);
