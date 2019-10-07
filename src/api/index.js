import axios from 'axios';
import {BASE_URL, API_KEY_PARAMETER} from '../config/api';
import qs from 'qs';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

// Sets
export const getSets = () => {
  const url = `/sets${API_KEY_PARAMETER}`;
  return axiosInstance.get(url);
};
