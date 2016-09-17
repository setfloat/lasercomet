// shows advertising 3 across of features, main page
import React from 'react';
import colors from 'components/Colors';
import Radium from 'radium';

const styleFeat = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justiftContent: 'space-around',
    // height: '40em'
  },

  box: {
    display: 'inline-block',
    height: '100%',
    width: `${100/3}%`,
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: colors.primeBoldTrans,
    height: '40em',
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
    paddingTop: '40%',
    width: '80%',
    paddingLeft: '10%',
    paddingRight: '10%'
    // position: 'absolute',
  },

  // gridCols: getColumns(),
  // '@media (max-width: 7000px)': { gridCols: '3' },
  // '@media (max-width: 1440px)': { gridCols: '3' },
  // '@media (max-width: 1220px)': { gridCols: '3' },
  // '@media (max-width: 900px)': { gridCols: '1' },
  // '@media (max-width: 560px)': { gridCols: '1' }


  // '@media (max-width: 7000px)': { gridCols: 'cols={3}' },
  // '@media (max-width: 1440px)': { gridCols: 'cols={3}' },
  // '@media (max-width: 1220px)': { gridCols: 'cols={3}' },
  // '@media (max-width: 900px)': { gridCols: 'cols={3}' },
  // '@media (max-width: 560px)': { gridCols: 'cols={3}' }


  // gridCols: {
  //   '@media (max-width: 7000px)': 3,
  //   '@media (max-width: 1440px)': 3,
  //   '@media (max-width: 1220px)': 3,
  //   '@media (max-width: 900px)': 1,
  //   '@media (max-width: 560px)': 1
  // }
}


const Features = React.createClass({
  render() {

    return  <section
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
            height={'100em'}
          />
          <div>This will be text</div>
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
        <div>This will be text</div>
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
        <div>This will be text</div>
        </div>
      </div>
    </section>;
  }
});

export default Radium(Features);
