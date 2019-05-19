import { string, bool } from "prop-types";

export const LinkPropTypes = {
  label: string.isRequired,
  to: string.isRequired,
  active: bool
}
