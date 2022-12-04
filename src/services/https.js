import axios from 'axios';
import { baseApiUrl } from './apiEndpoints';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL: baseApiUrl,
});

http.interceptors.request.use(config => {
  // if config required
  return config;
});

http.interceptors.response.use(null, function (error) {
  return Promise.reject(error);
});

export default http;
