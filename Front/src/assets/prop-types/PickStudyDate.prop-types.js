import { func, bool } from "prop-types";

export const PickStudyDatePropTypes = {
  onDateChange: func.isRequired,
  onConfirmDate: func.isRequired,
  disabledDate: func.isRequired,
  confirmIsVisible: bool.isRequired,
};