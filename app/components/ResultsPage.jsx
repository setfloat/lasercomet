// // results of search view, shows header and results
// import colors from 'components/Colors';
// import Radium from 'radium';
// import React from 'react';
// import Results from 'components/Results';
// import ResultsHeader from 'components/ResultsHeader';
//
// const styleHero = {
//   search: {
//     position: 'relative',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     margin: 'auto',
//     width: '50%'
//
//     // padding: '20%'
//   },
//   searchField: {
//
//     color: 'white',
//     backgroundColor: 'rgba(0,0,0,0.1)',
//     borderColor: colors.secondSoft,
//     borderWidth: '0 0 2px 0',
//     fontSize: '160%',
//     width: '49%',
//     ':focus': {
//       color: 'white',
//
//       // backgroundColor: 'rgba(0,0,0,0.3)',
//       borderColor: colors.thirdMain,
//       borderWidth: '0 0 2px 0',
//       outline: 'none'
//     },
//     ':active': {
//       backgroundColor: 'rgba(0,0,0,0.6)'
//     }
//
//     // borderRadius: '4px'
//   },
//   icon: {
//     fill: 'white'
//   }
// };
//
// const ResultsPage = React.createClass({
//   handleSearchSubmit(event) {
//     event.preventDefault();
//     console.log(this.props.searchResultsReducer.searchText);
//     this.props.fetchPhotos(this.props.searchResultsReducer.searchText);
//     this.props.router.push('/Results');
//   },
//
//   handleChange(event) {
//     let value = event.target.value;
//     this.props.searchText(value);
//
//     this.props.searchText(event.target.value)
//     const nextSearchField = Object.assign({}, this.state.searchQuery,
//       {
//         [event.target.name]: event.target.value
//       });
//     // this.setState({ searchInput: event.target.value });
//
//     // this.state.updateAddress(nextAddress);
//   },
//
//   handleInputChange(event) {
//
//     this.setState({ searchInput: event.target.value });
//   },
//
//   render() {
//     return <div>
//       <ResultsHeader
//         fetchPhotos={this.props.fetchPhotos}
//         searchResultsReducer={this.props.searchResultsReducer}
//         searchText={this.props.searchText}
//       />
//       <div
//         style={styleHero.search}
//       >
//         <form
//           onSubmit={this.handleSearchSubmit}
//         >
//           <img
//             height={'50em'}
//             // onChange={this.handleChange}
//             src={'images/search.svg'}
//             style={styleHero.icon}
//             value={this.state.value}
//
//             // style={styleHero.search}
//           />
//           <input
//             onChange={this.handleChange || this.handleinputChange}
//             onSubmit={this.handleSearchSubmit}
//             placeholder={'Find some photos'}
//             style={styleHero.searchField}
//             type={'text'}
//           />
//         </form>
//       </div>
//       <Results
//         fetchPhotos={this.props.fetchPhotos}
//         searchResultsReducer={this.props.searchResultsReducer}
//         searchText={this.props.searchText}
//         photos={this.props.photos}
//       />
//     </div>;
//   }
// });
//
// export default ResultsPage;


// results of search view, shows header and results
import React from 'react';
import Results from 'components/Results';
import ResultsHeader from 'components/ResultsHeader';
const ResultsPage = React.createClass({
  render() {
    return <div>
      <section>
        <ResultsHeader
          fetchPhotos={this.props.fetchPhotos}
          searchResultsReducer={this.props.searchResultsReducer}
          searchText={this.props.searchText}
        />
      </section>
      <section>
        <Results
          fetchPhotos={this.props.fetchPhotos}
          searchResultsReducer={this.props.searchResultsReducer}
          searchText={this.props.searchText}
          photos={this.props.photos}
        />
      </section>
    </div>;
  }
});

export default ResultsPage;
