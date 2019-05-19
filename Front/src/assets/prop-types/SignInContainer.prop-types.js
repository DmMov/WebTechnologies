import { FormContainersPropTypes } from './FormContainers.prop-types';
import { signInData } from './_types';

export const SignInContainerPropTypes = FormContainersPropTypes;

SignInContainerPropTypes['data'] = signInData;
SignInContainerPropTypes['errors'] = signInData;

