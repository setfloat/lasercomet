import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Radium from 'radium';
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
    backgroundColor: colors.primeDarkTrans,
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
  },

  iconPosit: {
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '0px',
    width: '10%',
    paddingRight: '24px',
    zIndex: '1103',
    ':hover': { backgroundColor: colors.primeDarkTrans }
  },

  permIcon: {
    ':hover': { backgroundColor: colors.primeAltTrans }
  },

  clusters: {
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '0px',
    width: '10%',
    left: '39px',
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '20px',
    zIndex: '1103'
  },
  clusterHover: {
    top: '0',
    ':hover': { backgroundColor: colors.primeDarkTrans }
  },
  clusterText: {
    paddingTop: '30px',
    // fontWeight: '500',
    fontSize: '2em',
    color: colors.secondBold,
    ':hover': { color: colors.secondMain }
  },
  permClusterText: {
    paddingTop: '10px',
    // fontWeight: '500',
    fontSize: '2em',
    color: colors.secondMain,
    // ':hover': { color: colors.primeBold }
  },
  permClusterHover: {
    top: '0',
    ':hover': { backgroundColor: colors.primeSoftTrans }
  },
  space: {
    width: '40%'
  }
}

const NavBar = React.createClass({
  render() {
    return <div>
      <div
        style={navStyles.dropBar}

      >
        <div
          style={navStyles.iconPosit}
        >
          <img src={'images/atom-variant.svg'} style={navStyles.icon} />
        </div>
        <div key={62} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={33} style={navStyles.clusterText}>
            <h4>LaserComet</h4>
          </div>
        </div>
        <div
          style={navStyles.space}
        >
        </div>
        <div
          style={navStyles.clusters}
        >
        </div>
        <div key={1} style={[navStyles.clusters, navStyles.clusterHover, navStyles.clusterText]}>
          <div
            // style={navStyles.clusterText}
          >
            <h4>Clusters</h4>
          </div>
        </div>
        <div key={2} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={3} style={navStyles.clusterText}>
            <h4>Login</h4>
          </div>
        </div>
      </div>
      <div style={navStyles.dropMidge}></div>
      <div
        style={navStyles.permBar}
      >
        <div key={5} style={[navStyles.iconPosit, navStyles.permIcon]}>
          <img key={2} src={'images/atom-variant.svg'} style={navStyles.icon} />
        </div>
        <div key={23} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={53} style={navStyles.permClusterText}>
            <h4>LaserComet</h4>
          </div>
          </div>
        <div
          style={navStyles.space}
        >
        </div>
        <div
          style={navStyles.space}
        >
        </div>
        <div
          style={navStyles.space}
        >
        </div>
        <div
          style={navStyles.clusters}
        >
        </div>
        <div key={19} style={[navStyles.clusters, navStyles.clusterHover, navStyles.permClusterText]}>
          <div
            // style={navStyles.clusterText}
          >
            <h4>Clusters</h4>
          </div>
        </div>
        <div key={2234} style={[navStyles.clusters, navStyles.permClusterHover]}>
          <div key={3234} style={navStyles.permClusterText}>
            <h4>Login</h4>
          </div>
        </div>
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

export default Radium(NavBar);
