import BrowseTile from 'components/BrowseTile';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const BrowseClusterPage = React.createClass({
  render() {
    const { i, browseCluster } = this.props;
    const { browsed } = this.props.browseCluster;
    console.log(browseCluster);
    console.log(this.props);

    const styles = {
      sClusterTitle: {
        width: 500,
        height: 100
      },

      base: {
        boxSizing: 'border-box',
        width: '20%',
        paddingBottom: '20%',
        borderStyle: 'solid',
        display: 'inline-block',
        margin: '0',
        position: 'relative',
        ':hover': {
          background: 'white'
        },
        ':active': {
          background: colors.secondMain
        },

        '@media (max-width: 1440px)': {
          width: '25%',
          paddingBottom: '24%'
        },

        '@media (max-width: 1220px)': {
          width: `${100 / 3}%`,
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
        padding: '7px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        // backgroundColor: colors.primeDarkTrans
        backgroundColor: colors.primeDarkTransLt
      }
    };

    return <div>
      <section
        style={styles.sect}
      >
        {browsed.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <BrowseTile
            {...this.props}
            i={i}
            key={i}
            photo={photo}
          />
          </div>
        )}
        </section>
    </div>
  }
});

export default Radium(BrowseClusterPage);
