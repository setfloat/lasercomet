// results of search, subset of results page.  stream of photos.
// import Paper from 'material-ui/Paper';
import Radium from 'radium';
// import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import ResultTile from 'components/ResultTile';
import colors from 'components/Colors';


const Results = React.createClass({
  render() {
    const { clickedPhoto, i, photos, savePhotoToDb } = this.props;
    const styles = {
      base: {
        boxSizing: 'border-box',
        // backgroundColor: '#cccff1',
        // border: '2px honeydew',
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
          background: 'white'
        },
        ':active': {
          background: colors.secondMain
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
        backgroundColor: colors.primeDarkTrans
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

    // console.log(this.props.photos);
    return <div>
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
            savePhotoToDb={savePhotoToDb}
            i={i}
            key={i}
            photo={photo}
          >
            {(() => {
              switch (photo.clicked) {
                case true: return <button key={i}>Save to Cluster</button>;
                case false: return null;
                default: false;
              }
            })()
            }
          </ResultTile>
        </div>
      )}
      </section>
      {/* <RaisedButton label="More" style={colors.primeBold} /> */}
    </div>;
  }
});

export default Radium(Results);
