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

// LEGO Parts
export const getLegoSetParts = (legoSetNum, params) => {
  const stringifyParams = qs.stringify(params, {skipNulls: true});
  const url = `/sets/${legoSetNum}/parts?${stringifyParams}`;
  return axiosInstance.get(url);
};
