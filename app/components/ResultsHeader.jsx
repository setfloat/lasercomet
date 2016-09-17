// results page view, gives search bar etc
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const styleResultsHeader = {
  section: {
    backgroundColor: colors.primeBoldTrans,
    paddingTop: '30px',
    paddingBottom: '30px'
  },

  paper: {
    width: '80%',
    paddingTop: '10%',
    marginLeft: '10%',
    align: 'middle',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    maxHeight: '200px',
    boxSizing: 'border-box'
  },
  paperContent: {
    // paddingTop: '10%',
    // paddingBottom: '40%',
    display: 'absolute',
    paddingLeft: '10%',
    paddingRight: '10%',
    text: '3vw'
  },
  search: {

    // padding: '20%'
  },
  searchField: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: colors.secondSoft,
    borderWidth: '0 0 2px 0',
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
  }
};

const ResultsHeader = React.createClass({
  render() {
    return <section
      style={styleResultsHeader.section}
    >
      <Paper
        style={styleResultsHeader.paper}
        zDepth={3}
      >
        <div
          style={styleResultsHeader.paperContent}
        >
          <h3>Results for:
            <input
              style={styleResultsHeader.searchField}
            />
          </h3>
        </div>
      </Paper>
    </section>;
  }
});

export default Radium(ResultsHeader);
