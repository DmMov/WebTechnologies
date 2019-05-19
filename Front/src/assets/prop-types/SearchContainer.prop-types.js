import { string, func } from "prop-types";

export const SearchContainerPropTypes = {
  searchStr: string.isRequired,
  sortBy: string,
  setSearch: func.isRequired,
  setUsers: func.isRequired,
  setIsLoading: func.isRequired
}
