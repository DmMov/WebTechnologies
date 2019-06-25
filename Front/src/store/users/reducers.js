import { SET_USERS, SET_SEARCH, SET_SORT } from "./actions";

const INITIAL_STATE = [];

export const usersReducer = (state = INITIAL_STATE, { type, payload}) => {
  switch (type) {
    case SET_USERS: 
      const users = payload.map((item, index) => {
        item.index = index + 1
        return item;
      });
      return users
    
  }

  return state;
}