import {API_KEY} from '../../config/api';

const API_ITEMS_LIMIT = 10;

export const tokenizedParams = params => {
  const paramsArray = {
    key: API_KEY,
    page_size: API_ITEMS_LIMIT,
    ...params,
  };
  return paramsArray;
};
