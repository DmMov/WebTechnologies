import { string, func } from "prop-types";

export const SearchPropTypes = {
  value: string.isRequired,
  change: func.isRequired,
  onSubmit: func.isRequired
}