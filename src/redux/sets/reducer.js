import * as types from './types';

const initialState = {
  list: [],
  item: null,
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SETS_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
      };

    case types.SETS_UPDATE_ITEM:
      return {
        ...state,
        selectedItem: action.value || null,
      };

    case types.SETS_FETCH_SETTINGS:
      return {
        ...state,
        isFetching: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
