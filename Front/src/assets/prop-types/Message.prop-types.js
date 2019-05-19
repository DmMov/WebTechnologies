import { string } from "prop-types";

export const MessagePropTypes = {
  messageClass: string.isRequired,
  iconType: string.isRequired,
  title: string.isRequired,
  messageText: string.isRequired
}