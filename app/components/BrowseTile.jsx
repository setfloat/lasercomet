import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const BrowseTile = React.createClass({
  render() {
    const { photo, i } = this.props;
    const styles = {
      paper: {
        position: 'absolute',
        top: '4px',
        bottom: '4px',
        left: '4px',
        right: '4px',
        textAlign: 'center',
        margin: '0',
        ':hover': {
          zDepth: 5
        },

        background: `url(${photo.webformatURL}) center center / cover no-repeat`
      },

      deleteButton: {
        ':active': {
          backgroundColor: colors.thirdMain
        }
      }
    };

    return <div
      style={styles.paper}
    >
      <Paper
        index={i}
        style={styles.paper}
        zDepth={4}
      />
    </div>;
  }
});

export default Radium(BrowseTile);
