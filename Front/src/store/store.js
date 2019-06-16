import { createStore } from 'redux';
import rootReducer from './reducers';

import { setUser } from './user/actions';
import { getJSON } from 'js-cookie';

export const store =  createStore(rootReducer);

const getUser = () => {
   const user = getJSON('user');
   typeof(user) !== 'undefined' && store.dispatch(setUser(user));
}

getUser();