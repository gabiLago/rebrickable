import * as types from './types';

export const setFetching = value => ({
  type: types.SETS_FETCH_SETTINGS,
  value,
});

export const updateList = value => ({
  type: types.SETS_UPDATE_LIST,
  value,
});
