import { bool } from "prop-types";
import { users } from './_types';

export const UserTablePropTypes = {
  isLoading: bool.isRequired,
  users
}