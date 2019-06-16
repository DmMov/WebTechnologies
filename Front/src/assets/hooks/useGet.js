import { useDispatch } from 'react-redux';
import { Get } from '../services/request.service';
import { api } from '../constants/api';
import { get } from 'js-cookie';

export const useGet = () => {
  const dispatch = useDispatch();

  const getting = (url, type) => {
    Get(
      api + url, 
      data => dispatch({ type, payload: data }), 
      error => console.error(error), 
      get('token')
    );
  }
  
  return getting;
}
