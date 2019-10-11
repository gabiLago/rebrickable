import * as types from './types';
import * as api from '../../api';
import {API_KEY} from '../../config/api';
import _ from 'lodash';

const API_ITEMS_LIMIT = 10;

export const setFetching = value => ({
  type: types.LEGO_SETS_FETCH_STATE,
  value,
});

export const updateList = (list, next) => ({
  type: types.LEGO_SETS_UPDATE_LIST,
  list,
  next,
});

export const updateItem = value => ({
  type: types.LEGO_SET_UPDATE_ITEM,
  value,
});

export const initSetsList = search => {
  console.log('searchString: ', search);
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      let params = {
        key: API_KEY,
        page_size: API_ITEMS_LIMIT,
        //search: searchString,
        //min_year: 2013,
        //max_year: 2019,
        //theme_id: 1,
      };
      if (search !== undefined) {
        params = {...params, search};
      }
      console.log('Params: ', params);
      const getSetsRes = await api.getLegoSets(params);
      const legoSets = _.get(getSetsRes, 'data.results', []);
      const nextApiCall = _.get(getSetsRes, 'data.next', null);
      dispatch(updateList(legoSets, nextApiCall));
    } catch (e) {
      console.log('Initial Sets List Fetch err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export const nextSetsList = url => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const formerSetsList = getState().legoSets.list;
      const getNextSetsRes = await api.getNextApiCall(url);
      const newSetsList = [
        ...formerSetsList,
        ..._.get(getNextSetsRes, 'data.results', []),
      ];
      const nextApiCall = _.get(getNextSetsRes, 'data.next', null);
      dispatch(updateList(newSetsList, nextApiCall));
    } catch (e) {
      console.log('Nexts Sets List Fetch err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
