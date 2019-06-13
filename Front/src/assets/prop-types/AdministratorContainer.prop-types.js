import { func, bool } from "prop-types";
import { users } from './_types';

export const AdministratorContainerPropTypes = {
  users,
  setUsers: func.isRequired,
  setIsLoading: func.isRequired 
}