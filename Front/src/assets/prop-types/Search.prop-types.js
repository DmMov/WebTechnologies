import { string, func } from "prop-types";

export const SearchPropTypes = {
  value: string.isRequired,
  setValue: func.isRequired,
  onSubmit: func.isRequired
}