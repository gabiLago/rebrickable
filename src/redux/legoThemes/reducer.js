import * as types from './types';

const initialState = {
  list: [],
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LEGO_THEMES_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
      };

    case types.LEGO_THEMES_FETCH_STATE:
      return {
        ...state,
        isFetching: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
