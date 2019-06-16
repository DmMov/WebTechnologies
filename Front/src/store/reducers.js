import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { usersReducer } from './users/reducers';
import { SET_LOADING } from './actions';

const defaultState = {
   loading: false,
   search: '',
   sort: ''
}

const commonReducer = (state = defaultState, { type, payload }) => {
   switch (type) {
      case SET_LOADING: 
         return {
            ...state,
            loading: payload
         }
   }

   return state;
}

export default combineReducers({
   common: commonReducer,
   user: userReducer,
   users: usersReducer,
});