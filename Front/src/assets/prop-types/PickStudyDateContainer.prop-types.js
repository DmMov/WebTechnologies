import { user } from './_types';
import { func } from 'prop-types';
export const PickStudyDateContainerPropTypes = {
  user,
  changeStudyDate: func.isRequired,
  setLoading: func.isRequired
}
