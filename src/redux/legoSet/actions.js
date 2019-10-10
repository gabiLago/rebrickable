import * as types from './types';
import * as api from '../../api';
import {API_KEY} from '../../config/api';
import _ from 'lodash';

const API_ITEMS_LIMIT = 10;

export const setFetching = value => ({
  type: types.LEGO_SET_FETCH_STATE,
  value,
});

export const updatePartsList = value => ({
  type: types.LEGO_SET_PARTS_UPDATE_LIST,
  value,
});

export const fetchSetPartsList = legoSetNum => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const params = {
        key: API_KEY,
        page_size: API_ITEMS_LIMIT,
      };
      const getLegoSetPartsRes = await api.getLegoSetParts(legoSetNum, params);
      const legoSetParts = _.get(getLegoSetPartsRes, 'data.results', []);
      dispatch(updatePartsList(legoSetParts));
    } catch (e) {
      console.log('getPartsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
