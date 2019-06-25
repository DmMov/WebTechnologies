export const SET_LOADING = 'SET_LOADING';
export const SET_FETCHING = 'SET_FETCHING';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';

export const setLoading = value => ({
  type: SET_LOADING,
  payload: value
});

export const setFetching = value => ({
  type: SET_FETCHING,
  payload: value
});

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
 });
 
export const setSort = sort => ({
  type: SET_SORT,
  payload: sort
});