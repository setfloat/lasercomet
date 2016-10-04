// import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';

// import axios from 'axios';
import colors from 'components/Colors';
import { withRouter } from 'react-router';

// document.designMode = 'on';


const styleHero = {
  heroFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroImg: {
    background: 'url("images/SaltaArgentina.jpeg") center center / cover no-repeat',
    width: '100%',

    // backgroundPosition: 'center',
    height: '60vh'
  },
  infoSec: {
    height: '30vh',
    backgroundColor: '#4283fa'
  },
  info: {
    backgroundColor: colors.primeBoldTrans,

    // background: 'url("images/dolphinfiller.jpg")
    // center center / cover no-repeat',
    width: '100%',
    height: '30em'
  },
  search: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 'auto',
    width: '50%'

    // padding: '20%'
  },
  searchField: {

    color: colors.thirdMain,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: colors.secondSoft,
    borderWidth: '0 0 2px 0',
    fontSize: '160%',
    width: '49%',
    ':focus': {
      color: 'white',
      // backgroundColor: 'rgba(0,0,0,0.3)',
      borderColor: colors.thirdMain,
      borderWidth: '0 0 2px 0',
      outline: 'none'
    },
    ':active': {
      backgroundColor: 'rgba(0,0,0,0.6)'
    }

    // borderRadius: '4px'
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
  getInitialState() {
    return {
      errors: {}
      // searchinput
    };
  },

  handleChange(event) {
    let value = event.target.value;
    this.props.searchText(value);

    this.props.searchText(event.target.value)
    const nextSearchField = Object.assign({}, this.state.searchQuery,
      {
        [event.target.name]: event.target.value
      });
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
          <div
            style={styleHero.search}
          >
            <span style={styleHero.title} >Laser</span>
            <span style={styleHero.title}>Comet</span>
          </div>
          <div
            style={styleHero.search}
          >
            <form
              onSubmit={this.handleSearchSubmit}
            >
              <img
                height={'50em'}
                // onChange={this.handleChange}
                src={'images/search.svg'}
                style={styleHero.icon}
                value={this.state.value}

                // style={styleHero.search}
              />
              <input
                onChange={this.handleChange || this.handleinputChange}
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

export default withRouter(Radium(Hero));
