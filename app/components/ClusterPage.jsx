// individual cluster view of user's photos
import ClusterPhotoTile from 'components/ClusterPhotoTile';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

// console.log(this.props.clusterPhotos);
const ClusterPage = React.createClass({
  render() {
    const {
      clickedPhoto,
      clickToDelete,
      clusterPhotos,
      deletePhoto,
      i
    } = this.props;
    const { userCluster } = this.props.clusterPhotos;
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
        backgroundColor: colors.secondMain
      },
      spacer: {
        height: '20px'
      },
      spacerRed: {
        height: '20px',
        backgroundColor: colors.primeAlt
      },
      spacerTallRed: {
        height: '4rem',
        backgroundColor: colors.primeAlt
      },
      spacerBlue: {
        height: '20px',
        backgroundColor: colors.secondMain
      }
    };

    return <div>
      <section style={styles.spacer} />
      <section style={styles.spacerRed} />
      <section
        style={styles.sect}
      >
        {userCluster.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <ClusterPhotoTile
            {...this.props}
            clickToDelete={clickToDelete}
            clickedPhoto={clickedPhoto}
            deletePhoto={deletePhoto}
            i={i}
            key={i}
            photo={photo}
          >
            {(() => {
              switch (photo.clicked) {
                case true: return <button key={i}>Delete from Cluster</button>;
                case false: return null;
                default: return false;
              }
            })()
            }
          </ClusterPhotoTile>
        </div>
      )}
      </section>
      <section style={styles.spacer} />
      <section style={styles.spacerTallRed} />
      <section style={styles.spacerBlue} />

    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(ClusterPage);
