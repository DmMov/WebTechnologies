import { createStore } from 'redux';
import rootReducer from './reducers';

import { setUserData } from './user/actions';
import Cookies from 'js-cookie';

export const store =  createStore(rootReducer);

const getUser = () => {
   const user = Cookies.getJSON('user');
   typeof(user) !== 'undefined' && store.dispatch(setUserData(user));
}

getUser();