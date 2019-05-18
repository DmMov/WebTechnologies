import { get, post, put } from 'axios'
import { domain } from '../../domain';

const getHeaders = (token) => (
  !!token ? { 
    headers: { 
      Authorization: `Bearer ${token}`
    } 
  } : null
);

export const getRequest = (url, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  get(domain + url, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response))
}

export const postRequest = (url, data, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  post(domain + url, data, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response));
}

export const putRequest = (url, data, onSuccess, onError, token) => {
  const headers = getHeaders(token);
  put(domain + url, data, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response));
}