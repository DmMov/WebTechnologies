import { get } from 'axios'
import { domain } from '../../domain';
export const getRequest = (url, onSuccess, onError, token) => {
  const headers = !!token ? { 
    headers: { 
      Authorization: `Bearer ${token}`
    } 
  } : null;
  get(domain + url, !!headers && headers)
    .then(({ data }) => onSuccess(data))
    .catch(error => !!error.response && onError(error.response))
}