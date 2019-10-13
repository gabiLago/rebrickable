import {API_KEY, API_ITEMS_LIMIT} from '../../config/api';

export const tokenizedParams = (pageSized, params) => {
  let defParams = {
    key: API_KEY,
    ...params,
  };

  if (pageSized) {
    defParams = {
      ...defParams,
      page_size: API_ITEMS_LIMIT,
    };
  }

  return defParams;
};
