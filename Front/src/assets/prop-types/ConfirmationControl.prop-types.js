import { shape, string } from "prop-types";

export const ConfirmationControlPropTypes = {
  match: shape({
    params: shape({
      userId: string.isRequired,
      confCode: string.isRequired
    })
  })
}