import { FormContainersPropTypes } from './FormContainers.prop-types';
import { signUpData } from './_types';

export const SignUpContainerPropTypes = FormContainersPropTypes;

SignUpContainerPropTypes['data'] = signUpData;
SignUpContainerPropTypes['errors'] = signUpData;
