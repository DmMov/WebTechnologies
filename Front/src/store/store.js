import { createStore } from 'redux';
import { get } from 'js-cookie';

import rootReducer from './reducers';
import { setUser } from './user/actions';
import { Get} from '../assets/services/request.service';
import { setLoading } from './actions';

export const store =  createStore(rootReducer);

const getUser = () => {
  store.dispatch(setLoading(true));

  Get(
    'auth', 
    data => {
      store.dispatch(setUser(data.user));
      store.dispatch(setLoading(false));
    },
    error => {
      store.dispatch(setLoading(false));
      console.log('error', error);
    },
    get('token')
  );
}

if(!!get('token') && typeof(get('token')) !== 'undefined')
  getUser();