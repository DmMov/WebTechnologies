import { string, func } from "prop-types";

export const HeaderPropTypes = {
  fullName: string.isRequired,
  onSignOut: func.isRequired
}
