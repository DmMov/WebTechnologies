import { get, post, put } from 'axios'
import { api } from '../constants/api';

const getHeaders = (token) => (
  !!token ? { 
    headers: { 
      Authorization: `Bearer ${token}`
    } 
  } : null
);

export const getRequest = (url, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  get(api + url, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response))
}

export const postRequest = (url, data, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  post(api + url, data, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response));
}

export const putRequest = (url, data, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  put(api + url, data, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response));
}