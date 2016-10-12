import { Link } from 'react-router';
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
    height: '0.1rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    top: '0px',
    backgroundColor: colors.primeAlt,
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
    zIndex: '1103'
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
    ':hover': {
      // backgroundColor: colors.primeDarkTrans,
      cursor: 'pointer'
    }
  },

  clusterText: {
    paddingTop: '30px',
    fontSize: '2em',
    color: colors.secondBold,
    ':hover': {
      // color: colors.secondMain,
      cursor: 'pointer'
    }
  },

  permClusterText: {
    paddingTop: '10px',
    fontSize: '2em',
    color: colors.secondMain
  },

  permClusterHover: {
    top: '0',
    ':hover': {
      cursor: 'pointer'
    }
  },

  space: {
    width: '40%'
  },

  textDecoration: {
    textDecoration: 'none',
    color: colors.secondBold
  },

  midgeTextDecoration: {
    textDecoration: 'none',
    color: colors.secondMain
  }
};

const NavBar = React.createClass({
  handleClusterTouchTap() {
    // change hardcode
    this.props.getUserCluster();
  },

  render() {
    return <div>
      <div style={navStyles.dropBar}>
        <div style={navStyles.iconPosit}>
          <img src={'images/atom-variant.svg'} style={navStyles.icon} />
        </div>
        <div key={62} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={33} style={navStyles.clusterText}>
            <h4>
              <Link
                style={navStyles.textDecoration}
                to="/"
              >LaserComet
              </Link>
            </h4>
          </div>
        </div>
        <div style={navStyles.space} />
        <div style={navStyles.clusters} />
        <div
          key={1}
          style={[
            navStyles.clusters,
            navStyles.clusterHover,
            navStyles.clusterText
          ]}
        >
          <div

            // style={navStyles.clusterText}
          >
            <h4
              onTouchTap={this.handleClusterTouchTap}
            >
            {/* <Link
              style={navStyles.textDecoration}
              to="/Cluster"
            >Cluster</Link> */}
              Cluster
            </h4>
          </div>
        </div>
        <div key={2} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={3} style={navStyles.clusterText}>
            <h4>
              <Link style={navStyles.textDecoration} to="/Login">Login</Link>
            </h4>
          </div>
        </div>
      </div>
      <div style={navStyles.dropMidge} />
      <div
        style={navStyles.permBar}
      >
        <div key={5} style={[navStyles.iconPosit, navStyles.permIcon]}>
          <img key={2} src={'images/atom-variant.svg'} style={navStyles.icon} />
        </div>
        <div key={23} style={[navStyles.clusters, navStyles.clusterHover]}>
          <div key={53} style={navStyles.permClusterText}>
            <h4>
              <Link
                style={navStyles.midgeTextDecoration}
                to="/"
              >LaserComet
              </Link>
            </h4>
          </div>
        </div>
        <div style={navStyles.space} />
        <div style={navStyles.space} />
        <div style={navStyles.space} />
        <div style={navStyles.clusters} />
        <div
          key={19}
          style={[
            navStyles.clusters,
            navStyles.clusterHover,
            navStyles.permClusterText
          ]}
        >
          <div

            // style={navStyles.clusterText}
          >
            <h4>
              <Link
                style={navStyles.midgeTextDecoration} to="/Cluster"
              >Cluster
              </Link>
            </h4>
          </div>
        </div>
        <div
          key={2234}
          style={[
            navStyles.clusters,
            navStyles.permClusterHover
          ]}
        >
          <div key={3234} style={navStyles.permClusterText}>
            <h4>
              <Link
                style={navStyles.midgeTextDecoration}
                to="/Login"
              >Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <div style={navStyles.permMidge} />
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default Radium(NavBar);
