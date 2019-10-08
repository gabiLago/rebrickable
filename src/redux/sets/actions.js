import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

export const setFetching = value => ({
  type: types.SETS_FETCH_SETTINGS,
  value,
});

export const updateList = value => ({
  type: types.SETS_UPDATE_LIST,
  value,
});

export const fetchSetsList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const getSetsRes = await api.getSets();
      const sets = _.get(getSetsRes, 'data.results', []);
      dispatch(updateList(sets));
    } catch (e) {
      console.log('getSets err: ', e);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
