// view of cluster title cards as seen on front page
import ClusterTile from 'components/ClusterTile';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const Clusters = React.createClass({
  render() {
    const { photos, i, fullClusters } = this.props;
    const styles = {
      base: {
        boxSizing: 'border-box',
        width: '20%',
        paddingBottom: '20%',
        borderStyle: 'solid',
        display: 'inline-block',
        margin: '0',
        position: 'relative',
        ':hover': {
          background: colors.thirdSoft
        },

        '@media (max-width: 1440px)': {
          width: '25%',
          paddingBottom: '24%'
        },

        '@media (max-width: 1220px)': {
          width: `${100 / 3.01}%`,
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
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: colors.primeAlt
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
      },
      foot: {
        height: '4rem',
        backgroundColor: colors.secondMain
      },
      footBuff: {
        height: '20px',
        backgroundColor: colors.primeDarkTrans
      },
      spacer: {
        height: '20px'
      },
      footText: {
        textDecoration: 'none',
        color: colors.secondBold,
        fontSize: '2em'
      },
      minBlue: {
        height: '2px',
        backgroundColor: colors.secondMain
      }
    };

    return <div>
      <section style={styles.minBlue} />
      <section style={styles.sect}>
        {fullClusters.clusteredCache.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <ClusterTile
            {...this.props}
            getBrowseCluster={this.props.getBrowseCluster}
            i={i}
            key={i}
            photo={photo}
          />
        </div>
        )}
      </section>
      <section style={styles.minBlue} />
      <section style={styles.spacer} />
      <section style={styles.foot} />
      <section style={styles.footBuff} />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(Clusters);
