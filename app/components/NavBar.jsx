import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import React from 'react';
import colors from 'components/Colors';

const navBarHeight = 3;

const navHeight = {
  dropBar: 1 + navBarHeight,
  permBar: navBarHeight,
  permMidge: 0.1 + navBarHeight,
  dropMidge: 0.1 + navBarHeight
};


const navStyles = {
  dropBar: {
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '0px',
    display: 'flex',
    width: '100%',
    height: `${navHeight.dropBar}rem`,
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '0px',
    backgroundColor: colors.secondMain,
    zIndex: '1103'
  },
  permBar: {
    position: 'fixed',
    boxSizing: 'border-box',
    borderRadius: '0px',
    display: 'flex',
    width: '100%',
    height: `${navHeight.permBar}rem`,
    // height: '3rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '0px',
    backgroundColor: colors.primeDark,
    zIndex: '1102'
  },
  permMidge: {
    position: 'fixed',
    boxSizing: 'border-box',
    borderRadius: '0px',
    display: 'flex',
    width: '100%',
    height: `${navHeight.permMidge}rem`,
    // height: '3.2rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '0px',
    backgroundColor: colors.primeSoft,
    zIndex: '1101'
  },
  dropMidge: {
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '0px',
    display: 'flex',
    width: '100%',
    height: `0.1rem`,
    // height: '3.2rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '0px',
    backgroundColor: colors.primeSoft,
    zIndex: '1100'
  },

  icon: {
    height: '2em',
    position: 'absolute',
    bottom: '10px',
    left: '39px'
  }
}

const NavBar = React.createClass({
  render() {
    return <div>
      <div
        style={navStyles.dropBar}

      >
        <img src={'images/atom-variant.svg'} style={navStyles.icon} />
      </div>
      <div style={navStyles.dropMidge}></div>
      <div
        style={navStyles.permBar}
      >
      <img src={'images/atom-variant.svg'} style={navStyles.icon} />

      </div>
      <div style={navStyles.permMidge}></div>

      {/* <AppBar
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <IconMenu
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        title="Title"
      /> */}
    </div>;
  }
});

export default NavBar;
