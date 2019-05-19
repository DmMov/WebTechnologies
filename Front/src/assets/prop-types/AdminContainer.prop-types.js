import { func, bool } from "prop-types";
import { users } from './_types';

export const AdminContainerPropTypes = {
  users,
  setUsers: func.isRequired,
  isLoading: bool.isRequired,
  setIsLoading: func.isRequired 
}