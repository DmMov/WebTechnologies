export const SET_USERS = 'SET_USERS';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';


export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const setSort = sort => ({
  type: SET_SORT,
  payload: sort
});