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
        list: action.list,
        next: action.next || null,
      };

    case types.LEGO_SET_FETCH_STATE:
      return {
        ...state,
        isFetching: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
