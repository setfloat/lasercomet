// 'use strict';
//
const searchText = (state = [], action) => {
  // ...state,
  switch (action.type) {
    case 'SEARCH_TEXT': {
      return Object.assign({}, state, { searchText: action.searchText });
    }
    case 'UPDATE_SEARCH_TEXT': {
      return Object.assign({}, state, { searchText: event.target.value });
    }

    default:
      return state;
  }
};

export default searchText;
