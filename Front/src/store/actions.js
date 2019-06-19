export const SET_LOADING = 'SET_LOADING';
export const SET_FETCHING = 'SET_FETCHING';

export const setLoading = value => ({
   type: SET_LOADING,
   payload: value
});

export const setFetching = value => ({
   type: SET_FETCHING,
   payload: value
});