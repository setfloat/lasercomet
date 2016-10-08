// shows advertising 3 across of features, main page
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const styleFeat = {
  flexContainer: {

    // eslint-disable-next-line max-len
    background: 'url("images/GlacierExpress.jpeg") center center / cover no-repeat',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },

  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    // height: '100%',
    width: `${100 / 3}%`,
    boxSizing: 'border-box',
    position: 'relative',
    height: '25em',
    borderColor: colors.primeSoft,
    borderStyle: 'solid',
    borderWidth: '1px',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    '@media (max-width: 1440px)': {
      width: `${100 / 3}%`,
      paddingBottom: '24%'
    },

    '@media (max-width: 1220px)': {
      width: `${100 / 3}%`,
      paddingBottom: '33%'
    },

    '@media (max-width: 900px)': {
      width: `${100 / 3}%`,
      paddingBottom: '45%'
    },

    '@media (max-width: 560px)': {
      width: '100%',
      paddingBottom: '92%',
      height: '20em'
    }
  },

  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 'auto 40% auto 40%',
    color: 'white',
    fontWeight: '600',
    fontSize: '2rem'
  },
  spacer: {
    height: '20px'
  }
};

const Features = React.createClass({
  render() {
    return <div>
      <section style={styleFeat.spacer} />
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
              height={'140em'}
              src={'images/telescope.svg'}
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
              height={'100em'}
              src={'images/visualization.svg'}
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
              height={'100em'}
              src={'images/satellite.svg'}
            />
            <div>Share: Explore our Clusters</div>
          </div>
        </div>
      </section>
      <section style={styleFeat.spacer} />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(Features);
