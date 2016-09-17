// results of search, subset of results page.  stream of photos.
import ResultTile from 'components/ResultTile';
import Radium from 'radium';
import React from 'react';
import Paper from 'material-ui/Paper';
import colors from 'components/Colors';

const styles = {
  base: {
    boxSizing: 'border-box',
    // backgroundColor: '#cccff1',
    // borderColor: 'honeydew',
    // padding: '1.5em',
    width: '20%',
    // height: '200px',
    paddingBottom: '20%',
    // borderWidth: '1px',
    borderStyle: 'solid',
    display: 'inline-block',
    margin: '0',
    position: 'relative',
    ':hover': {
      background: 'yellow'
    },


    // ':hover': {
    //   backgroundColor: 'red'
    // },
    //
    // ':focus': {
    //   backgroundColor: 'green'
    // },
    //
    // ':blur': {
    //   backgroundColor: 'orange'
    // },
    //
    // ':active': {
    //   backgroundColor: 'yellow'
    // },

    '@media (max-width: 1440px)': {
      width: '25%',
      paddingBottom: '24%'
    },

    '@media (max-width: 1220px)': {
      width: `${100/3}%`,
      paddingBottom: '33%'
    },

    '@media (max-width: 900px)': {
      width: '50%',
      paddingBottom: '45%'
    },

    '@media (max-width: 560px)': {
      width: '100%',
      paddingBottom: '92%'
    }
  },

  block: {
    display: 'inline-block',
    width: '50%',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },

  sect: {
      display:'flex',
      flexDirection: 'row',
      // justifyContent: 'center',
      alignContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      backgroundColor: colors.primeBoldTrans
  },
  tile: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  },

  paper: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    margin: '0'
  }
};

const Results = React.createClass({
  render() {
    return <div>
      <section
        style={styles.sect}
      >
        {/* <div
          style={styles.base}
          key={2}
        >
        <Paper
          style={styles.paper}
          zDepth={5}
        >
          <ResultTile
            key={3}
          />
          </Paper>
        </div> */}
        <div
          style={styles.base}
          key={4}
        >
          <ResultTile
            key={5}
          />
        </div>
        <div
          style={styles.base}
          key={6}
        >
          <ResultTile
            key={7}
          />
        </div>
        <div
          style={styles.base}
          key={8}
        >
          <ResultTile
            key={9}
          />
        </div>
        <div
          style={styles.base}
          key={10}
        >
          <ResultTile
            style={styles.base}
            key={11}
          />
        </div>
        <div
          style={styles.base}
          key={12}
        >
          <ResultTile
            style={styles.base}
            key={13}
          />
        </div>
        <div
          style={styles.base}
          key={14}
        >
          <ResultTile
            style={styles.base}
            key={15}
          />
        </div>
        <div
          style={styles.base}
          key={16}
        >
          <ResultTile
            style={styles.base}
            key={17}
          />
        </div>
        <div
          style={styles.base}
          key={18}
        >
          <ResultTile
            style={styles.base}
            key={19}
          />
        </div>
        <div
          style={styles.base}
          key={20}
        >
          <ResultTile
            style={styles.base}
            key={21}
          />
        </div>
        <div
          style={styles.base}
          key={22}
        >
          <ResultTile
            style={styles.base}
            key={23}
          />
        </div>
        <div
          style={styles.base}
          key={24}
        >
          <ResultTile
            style={styles.base}
            key={25}
          />
        </div>
        <div
          style={styles.base}
          key={26}
        >
          <ResultTile
            style={styles.base}
            key={27}
          />
        </div>
        <div
          style={styles.base}
          key={28}
        >
          <ResultTile
            style={styles.base}
            key={29}
          />
        </div>
        <div
          style={styles.base}
          key={30}
        >
          <ResultTile
            style={styles.base}
            key={31}
          />
        </div>
        <div
          style={styles.base}
          key={32}
        >
          <ResultTile
            style={styles.base}
            key={33}
          />
        </div>
        <div
          style={styles.base}
          key={34}
        >
          <ResultTile
            style={styles.base}
            key={35}
          />
        </div>
        <div
          style={styles.base}
          key={36}
        >
          <ResultTile
            style={styles.base}
            key={37}
          />
        </div>
        <div
          style={styles.base}
          key={38}
        >
          <ResultTile
            style={styles.base}
            key={39}
          />
        </div>
        <div
          style={styles.base}
          key={40}
        >
          <ResultTile
            style={styles.base}
            key={41}
          />
        </div>
        <div
          style={styles.base}
          key={42}
        >
          <ResultTile
            style={styles.base}
            key={43}
          />
        </div>
        <div
          style={styles.base}
          key={44}
        >
          <ResultTile
            style={styles.base}
            key={45}
          />
        </div>
        <div
          style={styles.base}
          key={46}
        >
          <ResultTile
            style={styles.base}
            key={47}
          />
        </div>
        <div
          style={styles.base}
          key={48}
        >
          <ResultTile
            style={styles.base}
            key={49}
          />
        </div>
        <div
          style={styles.base}
          key={50}
        >
          <ResultTile
            style={styles.base}
            key={51}
          />
        </div>
      </section>
    </div>;
  }
});

export default Radium(Results);
