import React from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'js-cookie';
import { setUser } from '../../store/user/actions';
import { setFetching } from '../../store/actions';
import SignIn from './SignIn';
import { isEmail } from 'validator';
import { signInOtherInfo } from 'assets/data/signInOtherInfo'
import { generateFormFields } from '../../assets/utils/generateFormFields';
import { Post } from '../../assets/services/request.service';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { isValid } from '../../assets/utils/isValid';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const SignInContainer = () => {
  document.title = 'Education | Sign In'; 

  const { data, errors, change, setErrors, validate } = useFormValidation(INITIAL_STATE, INITIAL_STATE);
  const dispatch = useDispatch();

  const { email, password } = data;

  const validateParams = {
    email: {
      condition: !isEmail(email),
      errorText: 'email is not valid'
    },
    password: {
      condition: password.length < 5,
      errorText: 'password has to be at least 5 characters'
    }
  }
  const fields = generateFormFields(data, errors, change, signInOtherInfo);

  const onSubmit = e => {
    e.preventDefault();
    if (isValid(data, validate, validateParams)) {
      dispatch(setFetching(true));
      Post(
        'auth/sign-in', 
        data, 
        data => {
          set('token', data.token);
          dispatch(setUser(data.user));
        }, 
        error => {
          setErrors(({
            email: 'there is something wrong',
            password: 'or maybe there is something wrong here'
          }));
        }
      );
      dispatch(setFetching(false));
    }
  };
  return <SignIn fields={fields} onSubmit={onSubmit} />;
}

export default SignInContainer;