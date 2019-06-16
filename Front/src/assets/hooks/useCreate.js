import { useDispatch } from 'react-redux';
import { Post } from '../services/request.service';
import { api } from '../constants/api';
import { get } from 'js-cookie';

export const useCreate = () => {
  const dispatch = useDispatch();

  const create = (data, url, type) => {
    Post(
      api + url, 
      data, 
      data => dispatch({ type, payload: data }), 
      error => console.error(error), 
      get('token')
    );
  }
  
  return create;
}
