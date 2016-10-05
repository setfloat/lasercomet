// shows advertising 3 across of features, main page
import React from 'react';
import colors from 'components/Colors';
import Radium from 'radium';

const styleFeat = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    background: 'url("images/GlacierExpress.jpeg") center center / cover no-repeat',
    // height: '40em'
  },

  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: `${100/3}%`,
    boxSizing: 'border-box',
    position: 'relative',
    // backgroundColor: colors.secondMainTransFeat,
    // backgroundColor: colors.thirdAltTrans,
    // backgroundColor: colors.primeBoldTrans,
    height: '25em',
    borderColor: colors.primeSoft,
    borderStyle: 'solid',
    borderWidth: '1px',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    '@media (max-width: 1440px)': {
      width: `${100/3}%`,
      paddingBottom: '24%',
    },

    '@media (max-width: 1220px)': {
      width: `${100/3}%`,
      paddingBottom: '33%'
    },

    '@media (max-width: 900px)': {
      width: `${100/3}%`,
      paddingBottom: '45%'
    },

    '@media (max-width: 560px)': {
      width: '100%',
      paddingBottom: '92%',
      height: '20em'
    },
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 'auto 40% auto 40%',
    // width: '40%',
    // marginLeft: '40%',
    // marginRight: '40%',
    color: 'white',
    fontWeight: '600',
    fontSize: '2rem'
    //
    // paddingTop: '50%',
    // width: '100%',
    // paddingLeft: '40%',
    // paddingRight: '40%'
    // position: 'absolute',
  },
  spacer: {
    height: '20px'
  }
}


const Features = React.createClass({
  render() {

    return  <div>
    <section style={styleFeat.spacer}>

    </section>
    <section
      style={styleFeat.flexContainer}
    >
      <div
        style={styleFeat.box}
      >
        <div
          style={styleFeat.content}
        >
          <img
            src={'images/telescope.svg'}
            height={'140em'}
          />
          <div>Find: Photos</div>
        </div>
      </div>
      <div
        style={styleFeat.box}
      >
        <div
          style={styleFeat.content}
        >
        <img
          src={'images/visualization.svg'}
          height={'100em'}
        />
        <div>Gather: Photos to a Cluster</div>
        </div>
      </div>
      <div
        style={styleFeat.box}
      >
        <div
          style={styleFeat.content}
        >
        <img
          src={'images/satellite.svg'}
          height={'100em'}
        />
        <div>Share: Explore our Clusters</div>
        </div>
      </div>
    </section>
    <section style={styleFeat.spacer}>
    </section>
    </div>;
  }
});

export default Radium(Features);
