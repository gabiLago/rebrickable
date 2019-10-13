import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import * as utils from '../utils';

export const themeFetching = value => ({
  type: types.LEGO_THEMES_FETCH_STATE,
  value,
});

export const updateThemesList = list => ({
  type: types.LEGO_THEMES_UPDATE_LIST,
  list,
});

export const legoThemesList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(themeFetching(true));

      const getLegoThemesRes = await api.getLegoThemes(
        utils.tokenizedParams(false),
      );

      const legoThemes = _.get(getLegoThemesRes, 'data.results', []);
      console.log('legoThemes: ', legoThemes);
      //dispatch(updateThemesList(legoSetParts, nextApiCall));
    } catch (e) {
      console.log('Initial Parts List Fetch err: ', e.message);
    } finally {
      dispatch(themeFetching(false));
    }
  };
};
