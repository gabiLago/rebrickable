import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

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
      const getLegoSetPartsRes = await api.getLegoSetParts(legoSetNum);
      console.log('res getLegoSetRes: ', getLegoSetPartsRes);
      const legoSetParts = _.get(getLegoSetPartsRes, 'data.results', []);
      console.log('legoSetParts data results: ', legoSetParts);
      dispatch(updatePartsList(legoSetParts));
    } catch (e) {
      console.log('getPartsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
