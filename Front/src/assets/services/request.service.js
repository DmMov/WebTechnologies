import { get, post, put, delete as del } from 'axios'
import { api } from '../constants/api';

const getHeaders = (token) => (
  !!token ? { 
    headers: { 
      Authorization: `Bearer ${token}`
    } 
  } : null
);

export const Get = (url, success, error, token) => {
  const headers = getHeaders(token);
  get(api + url, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response))
}

export const Post = (url, data, success, error, token) => {
  const headers = getHeaders(token);
  post(api + url, data, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response));
}

export const Put = (url, data, success, error, token) => {
  const headers = getHeaders(token);
  put(api + url, data, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => !!response && error(response));
}

export const Delete = (url, success, error, token) => {
  const headers = getHeaders(token);
  del(api + url, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response));
}