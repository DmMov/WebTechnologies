import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { usersReducer } from './users/reducers';
import { SET_LOADING, SET_FETCHING, SET_SEARCH, SET_SORT } from './actions';

const INITIAL_STATE = {
  loading: false,
  fetching: false,
  search: '',
  sort: ''
}

const commonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LOADING: 
      return {
        ...state,
        loading: payload
      }
    case SET_FETCHING: 
      return {
        ...state,
        fetching: payload
      }
    case SET_SEARCH:
      return {
        ...state,
        search: payload
      }
        
    case SET_SORT: 
      return {
        ...state,
        sort: payload
      }
  }

  return state;
}

export default combineReducers({
  common: commonReducer,
  user: userReducer,
  users: usersReducer,
});