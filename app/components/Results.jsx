// results of search, subfile of results page.  stream of photos.
import Radium from 'radium';
import React from 'react';
import ResultTile from 'components/ResultTile';
import colors from 'components/Colors';

const Results = React.createClass({
  render() {
    const { clickedPhoto, i, photos, savePhotoToDb } = this.props;
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

      spacer: {
        height: '20px'
      },

      spacerRed: {
        height: '20px',
        backgroundColor: colors.primeAlt
      },

      spacerBlue: {
        height: '20px',
        backgroundColor: colors.secondMain
      },

      minBlue: {
        height: '2px',
        backgroundColor: colors.secondMain
      },

      spacerPurple: {
        height: '20px',
        backgroundColor: colors.primeDarkTrans
      }
    };

    return <div>
      <section style={styles.minBlue} />
      <section
        style={styles.sect}
      >
        {photos.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <ResultTile
            {...this.props}
            clickedPhoto={clickedPhoto}
            i={i}
            key={i}
            photo={photo}
            savePhotoToDb={savePhotoToDb}
          >
            {(() => {
              switch (photo.clicked) {
                case true: return <button
                  key={i}
                  style={styles.saveButton}
                >Save to Cluster</button>;
                case false: return null;
                default: return false;
              }
            })()
            }
          </ResultTile>
        </div>
      )}
      </section>
      <section style={styles.spacer} />
      <section style={styles.spacerBlue} />
      <section style={styles.spacerBlue} />
      <section style={styles.spacerBlue} />
      <section style={styles.spacerPurple} />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(Results);
