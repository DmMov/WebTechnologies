import { SET_USER_DATA, CHANGE_STUDY_DATE, REMOVE_USER_DATA, EMAIL_CONFIRM } from "./actions";

const defaultState = {};

export const userReducer = (state = defaultState, { type, payload }) => {
   switch(type) {
      case SET_USER_DATA:
         return {
            ...payload
         };
      case CHANGE_STUDY_DATE: 
         return {
            ...state,
            studyDate: payload
         };
      case EMAIL_CONFIRM: 
         return {
            ...state,
            emailConfirmed: payload
         };
      case REMOVE_USER_DATA: 
         return {};
   }

   return state;
}



