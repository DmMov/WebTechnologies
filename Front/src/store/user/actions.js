export const SET_USER = 'SET_USER';
export const CHANGE_STUDY_DATE = 'CHANGE_STUDY_DATE';
export const EMAIL_CONFIRM = 'EMAIL_CONFIRM';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

export const setUser = data => ({
   type: SET_USER,
   payload: data
});

export const changeStudyDate = date => ({
   type: CHANGE_STUDY_DATE,
   payload: date
});

export const emailConfirm = confirm => ({
   type: EMAIL_CONFIRM,
   payload: confirm
});

export const removeUserData = () => ({
   type: REMOVE_USER_DATA
});

