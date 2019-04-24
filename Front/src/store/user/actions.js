export const SET_USER_DATA = 'SET_USER_DATA';
export const CHANGE_STUDY_DATE = 'CHANGE_STUDY_DATE';
export const EMAIL_CONFIRM = 'EMAIL_CONFIRM';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

export const setUserData = data => ({
   type: SET_USER_DATA,
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

