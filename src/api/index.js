import axios from 'axios';
import {BASE_URL, API_KEY_PARAMETER} from '../config/api';
import qs from 'qs';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

// Sets
export const getSets = () => {
  const url = `/sets${API_KEY_PARAMETER}&min_year=2013&max_year=2019&theme_id=1`;
  return axiosInstance.get(url);
};
