
// individual cluster view of 12 photos
import ClusterPhotoTile from 'components/ClusterPhotoTile';
import ClusterTitleCard from 'components/ClusterTitleCard';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

// console.log(this.props.clusterPhotos);


const ClusterPage = React.createClass({
  render() {
    const { clickedPhoto, clickToDelete, i, clusterPhotos, deletePhoto } = this.props;
    const { userCluster } = this.props.clusterPhotos;
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
        // backgroundColor: colors.primeDarkTrans
        backgroundColor: colors.secondMain
      },
      spacer: {
        height: '20px'
      },
      spacerRed: {
        height: '20px',
        backgroundColor: colors.primeAlt
      },
      spacerBlue: {
        height: '4rem',
        backgroundColor: colors.secondMain
      }

    };

    return <div>
      {/* <ClusterTitleCard
        style={styles.sClusterTitle}
      /> */}
      <section style={styles.spacer} />
      <section style={styles.spacerRed} />
      {/* <section style={styles.spacerBlue} /> */}

      <section
        style={styles.sect}
      >
        {userCluster.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <ClusterPhotoTile
            {...this.props}
            clickedPhoto={clickedPhoto}
            clickToDelete={clickToDelete}
            deletePhoto={deletePhoto}
            i={i}
            key={i}
            photo={photo}
          >
            {(() => {
              switch (photo.clicked) {
                case true: return <button key={i}>Delete from Cluster</button>;
                case false: return null;
                default: false;
              }
            })()
            }
          </ClusterPhotoTile>
        </div>
      )}
      </section>
      <section style={styles.spacer} />
      <section style={styles.spacerRed} />
    </div>;
  }
});


export default Radium(ClusterPage);
