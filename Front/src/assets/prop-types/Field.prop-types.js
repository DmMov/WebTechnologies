import { string, func } from "prop-types";

export const FieldPropTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  type: string.isRequired,
  setValue: func.isRequired
}