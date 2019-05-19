import { string, func } from "prop-types";

export const SortContainerPropTypes = {
  searchStr: string,
  setSort: func.isRequired,
  setUsers: func.isRequired,
  setIsLoading: func.isRequired
}