import { FormContainersPropTypes } from './FormContainers.prop-types';
import { singInData } from './_types';

export const SignInContainerPropTypes = FormContainersPropTypes;

SignInContainerPropTypes['data'] = singInData;
SignInContainerPropTypes['errors'] = singInData;

