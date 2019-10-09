import * as types from './types';

const initialState = {
  list: [],
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LEGO_SET_PARTS_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
      };

    case types.LEGO_SET_FETCH_STATE:
      return {
        ...state,
        selectedItem: action.value || null,
      };

    default:
      return state;
  }
};

export default reducer;
