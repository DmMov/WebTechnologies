import { string, number } from "prop-types";

export const ErrorPropTypes = {
  errorClass: string.isRequired,
  code: number.isRequired,
  title: string.isRequired,
  message: string.isRequired
}