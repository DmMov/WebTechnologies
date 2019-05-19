import { FormContainerPropTypes } from './FormContainer.prop-types';
import { singInData } from './_types';

export const SignInContainerPropTypes = FormContainerPropTypes;

SignInContainerPropTypes['data'] = singInData;
SignInContainerPropTypes['errors'] = singInData;

