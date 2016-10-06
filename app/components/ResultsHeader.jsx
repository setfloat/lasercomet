// results page view, gives search bar etc
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import axios from 'axios';
import colors from 'components/Colors';
import { withRouter } from 'react-router';

const styleResultsHeader = {
  section: {
    backgroundColor: colors.primeBoldTrans,
    paddingTop: '30px',
    paddingBottom: '50px',
    height: '40em'
  },

  sect: {
    // width: '80%',
    // paddingTop: '10%',
    // marginLeft: '10%',
    // background: colors.secondAlt,
    // align: 'middle',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100px'
  },
  search: {
    position: 'relative',
    // top: '50%',
    transform: 'translateY(-30%)',
    margin: 'auto',
    width: '50%',
    paddingLeft: '20%',
    '@media (max-width: 1020px)': {
      width: '80%',
    },
  },
  searchField: {

    color: colors.thirdMain,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: colors.secondMain,
    borderWidth: '0 0 2px 0',
    fontSize: '160%',
    width: '49%',
    ':focus': {
      color: colors.secondMain,

      // backgroundColor: 'rgba(0,0,0,0.3)',
      borderColor: colors.thirdMain,
      borderWidth: '0 0 2px 0',
      outline: 'none'
    },
    ':active': {
      backgroundColor: 'rgba(0,0,0,0.6)'
    }
  },
  icon: {
    fill: 'white'
  }
};

const ResultsHeader = React.createClass({
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

    return <section style={styleResultsHeader.sect}>
       <div style={styleResultsHeader.search}>
        <form
          onSubmit={this.handleSearchSubmit}
        >
          <img
            height={'50em'}
            // onChange={this.handleChange}
            src={'images/searchDark.svg'}
            style={styleResultsHeader.icon}
            value={this.state.value}

            // style={styleHero.search}
          />
          <input
            onChange={this.handleChange}
            onSubmit={this.handleSearchSubmit}
            placeholder={'Find some photos'}
            style={styleResultsHeader.searchField}
            type={'text'}
          />
        </form>
      </div>
    </section>
  }
});

export default withRouter(Radium(ResultsHeader));
///////////////

//   render() {
//     return <section
//       style={styleResultsHeader.section}
//     >
//       <Paper
//         style={styleResultsHeader.paper}
//         zDepth={3}
//       >
//         <div
//           style={styleResultsHeader.search}
//         >
//         {/*  */}
//           <form
//             onSubmit={this.handleSearchSubmit}
//           >
//             <img
//               height={'50em'}
//               src={'images/search.svg'}
//               style={styleResultsHeader.icon}
//
//               // style={styleHero.search}
//             />
//             <input
//               onSubmit={this.handleSearchSubmit}
//               placeholder={'Find some photos'}
//               style={styleResultsHeader.searchField}
//               type={'text'}
//             />
//           </form>
//         {/*  */}
//           {/* <h3>Results for:
//             <input
//               style={styleResultsHeader.searchField}
//             />
//           </h3> */}
//         </div>
//       </Paper>
//     </section>;
//   }
// });
//
// export default withRouter(Radium(ResultsHeader));
