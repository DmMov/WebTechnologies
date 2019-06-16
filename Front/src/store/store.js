import { createStore } from 'redux';
import { get } from 'js-cookie';

import rootReducer from './reducers';
import { setUser } from './user/actions';
import { Get} from '../assets/services/request.service';

export const store =  createStore(rootReducer);

const getUser = () => {
   const token = get('token');
   if (typeof(token) !== 'undefined') {
      Get(
         'auth', 
         data => store.dispatch(setUser(data.user)),
         error => console.log(error),
         token
      )
   }
}

getUser();