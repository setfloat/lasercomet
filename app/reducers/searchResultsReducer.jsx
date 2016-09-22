// 'use strict';
//
const searchText = (state = [], action) => {
  // ...state,
  switch (action.type) {
    case 'SEARCH_TEXT': {
      return Object.assign({}, state, { searchText: action.searchText });
    }

    default:
      return state;
  }
};

export default searchText;
