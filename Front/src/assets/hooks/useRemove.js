import { useDispatch } from 'react-redux';
import { Delete } from '../services/request.service';
import { api } from '../constants/api';
import { get } from 'js-cookie';

export const useRemove = () => {
  const dispatch = useDispatch();

  const remove = (url, type) => {
    Delete(
      api + url, 
      data => dispatch({ type, payload: data }), 
      error => console.error(error), 
      get('token')
    );
  }
  
  return remove;
}

