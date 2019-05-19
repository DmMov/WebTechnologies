import { FormContainersPropTypes } from './FormContainers.prop-types';
import { singUpData } from './_types';

export const SignUpContainerPropTypes = FormContainersPropTypes;

SignUpContainerPropTypes['data'] = singUpData;
SignUpContainerPropTypes['errors'] = singUpData;
