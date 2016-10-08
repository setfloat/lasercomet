import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';
import { withRouter } from 'react-router';

const styleHero = {
  heroFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  heroImg: {

    // eslint-disable-next-line max-len
    background: 'url("images/SaltaArgentina.jpeg") center center / cover no-repeat',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '60vh'
  },

  infoSec: {
    height: '30vh',
    backgroundColor: '#4283fa'
  },

  info: {
    backgroundColor: colors.primeBoldTrans,
    width: '100%',
    height: '30em'
  },

  search: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 'auto',
    width: '100%',
    paddingLeft: '25%',
    paddingRight: '20%',
    '@media (max-width: 850px)': {
      paddingLeft: '22%',
      paddingRight: '16%'
    },

    '@media (max-width: 740px)': {
      paddingLeft: '16%',
      paddingRight: '12%'
    }
  },

  searchBar: {
    position: 'relative',
    top: '0%',
    transform: 'translateY(-50%)',
    margin: 'auto',
    width: '50%',
    '@media (max-width: 740px)': {
      width: '80%',
      borderWidth: '0 0 4px 0'
    }
  },

  searchField: {
    color: colors.thirdMain,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: 'white',
    borderWidth: '0 0 2px 0',
    fontSize: '160%',
    width: '49%',
    ':focus': {
      color: 'white',
      borderColor: colors.thirdMain,
      borderWidth: '0 0 2px 0',
      outline: 'none'
    },

    ':active': {
      backgroundColor: 'rgba(0,0,0,0.6)'
    },

    '@media (max-width: 740px)': {
      width: '80%',
      borderWidth: '0 0 4px 0'
    }
  },

  icon: {
    fill: 'white'
  },

  title: {
    fontSize: '600%',
    color: 'white',
    paddingBottom: '15%',
    display: 'inline-block'
  }
};

const Hero = React.createClass({

  handleChange(event) {
    const value = event.target.value;

    this.props.searchText(value);
    this.props.searchText(event.target.value);
  },

  handleInputChange(event) {
    this.setState({ searchInput: event.target.value });
  },

  handleSearchSubmit(event) {
    event.preventDefault();
    this.props.fetchPhotos(this.props.searchResultsReducer.searchText);
    this.props.router.push('/Results');
  },

  render() {
    return <div>
      <section style={styleHero.heroFlex} >
        <div style={styleHero.heroImg} >
          <div style={styleHero.search}>
            <span style={styleHero.title} >Laser</span>
            <span style={styleHero.title}>Comet</span>
          </div>
          <div style={styleHero.searchBar}>
            <form onSubmit={this.handleSearchSubmit}>
              <img
                height={'50em'}
                src={'images/search.svg'}
                style={styleHero.icon}
                value={this.state.value}
              />
              <input
                onChange={this.handleChange}
                onSubmit={this.handleSearchSubmit}
                placeholder={'Find some photos'}
                style={styleHero.searchField}
                type={'text'}
              />
            </form>
          </div>
        </div>
      </section>
    </div>;
  }
});

// eslint-disable-next-line new-cap
export default withRouter(Radium(Hero));
