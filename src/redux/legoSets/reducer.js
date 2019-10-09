import * as types from './types';

const initialState = {
  list: [],
  item: null,
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LEGO_SETS_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
      };

    case types.LEGO_SET_UPDATE_ITEM:
      return {
        ...state,
        selectedItem: action.value || null,
      };

    case types.LEGO_SETS_FETCH_STATE:
      return {
        ...state,
        isFetching: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
