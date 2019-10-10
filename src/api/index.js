import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

// LEGO Sets
export const getLegoSets = params => {
  const stringifyParams = qs.stringify(params, {skipNulls: true});
  const url = `/sets?${stringifyParams}`;
  return axiosInstance.get(url);
};

// Next Api Call for Sets or Parts - for pagination - URL comes whith its token! from API, they did the work for us ;-)
export const getNextApiCall = absoluteUrl => {
  return axiosInstance.get(absoluteUrl);
};

// LEGO Parts
export const getLegoSetParts = (legoSetNum, params) => {
  const stringifyParams = qs.stringify(params, {skipNulls: true});
  const url = `/sets/${legoSetNum}/parts?${stringifyParams}`;
  return axiosInstance.get(url);
};
