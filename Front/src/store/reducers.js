import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { usersReducer } from './users/reducers';
import { SET_IS_LOADING } from './actions';

const defaultState = {
   isLoading: false
}

const generalReducer = (state = defaultState, { type, payload }) => {
   switch (type) {
      case SET_IS_LOADING: 
         return {
            ...state,
            isLoading: payload
         }
   }

   return state;
}

export default combineReducers({
   general: generalReducer,
   user: userReducer,
   users: usersReducer,
});