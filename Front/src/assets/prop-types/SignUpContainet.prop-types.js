import { FormContainerPropTypes } from './FormContainer.prop-types';
import { singUpData } from './_types';

export const SignUpContainerPropTypes = FormContainerPropTypes;

SignUpContainerPropTypes['data'] = singUpData;
SignUpContainerPropTypes['errors'] = singUpData;
