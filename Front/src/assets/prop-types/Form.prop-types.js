import { string, func } from "prop-types";

export const FormPropTypes = {
  formClass: string,
  onSubmit: func.isRequired,
  buttonText: string.isRequired,
  title: string.isRequired
}
