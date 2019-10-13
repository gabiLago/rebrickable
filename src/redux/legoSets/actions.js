import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Utils} from '../utils';

export const setFetching = value => ({
  type: types.LEGO_SETS_FETCH_STATE,
  value,
});

export const updateList = (list, next) => ({
  type: types.LEGO_SETS_UPDATE_LIST,
  list,
  next,
});

export const updateUserSetsList = list => ({
  type: types.LEGO_USER_SETS_UPDATE_LIST,
  list,
});

export const updateItem = value => ({
  type: types.LEGO_SET_UPDATE_ITEM,
  value,
});

export const updateQueryParams = params => {
  const action = {
    type: types.QUERY_PARAMS_UPDATE_LIST,
    params,
  };
  return action;
};

export const initSetsList = () => {
  return async (dispatch, getState) => {
    try {
      const {params, userSetsList} = getState().legoSets;
      const tokenizedParams = Utils.tokenizedParams(params);

      dispatch(setFetching(true));

      const getSetsRes = await api.getLegoSets(tokenizedParams);
      let legoSetsList = _.get(getSetsRes, 'data.results', []);
      const nextApiCall = _.get(getSetsRes, 'data.next', null);

      if (userSetsList) {
        console.log('User: ', userSetsList);
        console.log('Lego: ', legoSetsList);
        legoSetsList = [...userSetsList, ...legoSetsList];
        console.log('mixed', legoSetsList);
      }

      dispatch(updateList(legoSetsList, nextApiCall));
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

export const postUserSet = data => {
  return (dispatch, getState) => {
    const {userSetsList} = getState().legoSets;
    if (userSetsList) {
      const list = [data, ...userSetsList];
      dispatch(updateUserSetsList(list));
    } else {
      dispatch(updateUserSetsList([data]));
    }
  };
};
