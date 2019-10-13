import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import * as utils from '../utils/';

export const setFetching = value => ({
  type: types.LEGO_SET_FETCH_STATE,
  value,
});

export const updatePartsList = (list, next) => ({
  type: types.LEGO_SET_PARTS_UPDATE_LIST,
  list,
  next,
});

export const initialSetPartsList = legoSetNum => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));

      const getLegoSetPartsRes = await api.getLegoSetParts(
        legoSetNum,
        utils.tokenizedParams(true),
      );

      const nextApiCall = _.get(getLegoSetPartsRes, 'data.next', null);
      const legoSetParts = _.get(getLegoSetPartsRes, 'data.results', []);
      dispatch(updatePartsList(legoSetParts, nextApiCall));
    } catch (e) {
      console.log('Initial Parts List Fetch err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export const nextSetPartsList = url => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const formerPartsList = getState().legoSet.list;
      const getNextPartsRes = await api.getNextApiCall(url);
      const newPartsList = [
        ...formerPartsList,
        ..._.get(getNextPartsRes, 'data.results', []),
      ];
      const nextApiCall = _.get(getNextPartsRes, 'data.next', null);
      dispatch(updatePartsList(newPartsList, nextApiCall));
    } catch (e) {
      console.log('Next Parts List Fetch err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
