import * as types from './types';
import * as api from '../../api';
import {API_KEY} from '../../config/api';
import _ from 'lodash';

const API_ITEMS_LIMIT = 10;

export const setFetching = value => ({
  type: types.LEGO_SETS_FETCH_STATE,
  value,
});

export const updateList = value => ({
  type: types.LEGO_SETS_UPDATE_LIST,
  value,
});

export const updateItem = value => ({
  type: types.LEGO_SET_UPDATE_ITEM,
  value,
});

export const fetchSetsList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const params = {
        key: API_KEY,
        page_size: API_ITEMS_LIMIT,
        min_year: 2013,
        max_year: 2019,
        theme_id: 1,
      };
      const getSetsRes = await api.getLegoSets(params);
      const legoSets = _.get(getSetsRes, 'data.results', []);
      dispatch(updateList(legoSets));
    } catch (e) {
      console.log('getSets err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
