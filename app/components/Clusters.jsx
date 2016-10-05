// view of cluster title cards as seen on front page
import ClusterTile from 'components/ClusterTile';
import Radium from 'radium';
import React from 'react';
import Paper from 'material-ui/Paper';
import colors from 'components/Colors';


const Clusters = React.createClass({
  // componentWillMount() {
  //     this.props.retrieveAllClusters();
  // },

  render() {
    const { photos, i, fullClusters, getBrowseCluster } = this.props;
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
          background: colors.thirdSoft
        },

        '@media (max-width: 1440px)': {
          width: '25%',
          paddingBottom: '24%'
        },

        '@media (max-width: 1220px)': {
          width: `${100/3.01}%`,
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
          display:'flex',
          flexDirection: 'row',
          // justifyContent: 'center',
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
      }
    };

    return <div>
      <section
        style={styles.sect}
      >
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
          ></ClusterTile>
        </div>
        )}
      </section>
      <section style={styles.spacer} />
      <section style={styles.foot}>
      </section>
      <section style={styles.footBuff }/>
      {/* <section style={styles.spacer} /> */}
    </div>;
  }
});

export default Radium(Clusters);
