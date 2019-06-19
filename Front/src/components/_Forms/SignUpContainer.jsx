import React from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'js-cookie';
import { isEmail } from 'validator';
import SignUp from './SignUp';
import { setUser } from '../../store/user/actions';
import { setFetching } from '../../store/actions';
import { generateFormFields } from '../../assets/utils/generateFormFields';
import { signUpOtherInfo } from '../../assets/data/signUpOtherInfo';
import { Post } from '../../assets/services/request.service';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { isValid } from '../../assets/utils/isValid';

const INITIAL_STATE = {
  email: '',
  name: '',
  lastName: '',
  password: '',
  repeat: '',
  age: ''
};

const SignUpContainer = () => {
  document.title = 'Education | Sign Up';
  
  const { data, errors, change, setErrors, validate } = useFormValidation(INITIAL_STATE, INITIAL_STATE);
  const dispatch = useDispatch();

  const { email, password, repeat, age } = data;

  const validateParams = {
    email: {
      condition: !isEmail(email),
      errorText: 'email is not valid'
    }, 
    password: {
      condition: password.length < 5,
      errorText: 'password has to be at least 5 characters'
    }, 
    repeat: {
      condition: repeat != password,
      errorText: 'passwords have to match'
    }, 
    age: {
      condition: parseInt(age) <= 0,
      errorText: 'age cannot be zero or less'
    }
  };

  const fields = generateFormFields(data, errors, change, signUpOtherInfo);

  const onSubmit = e => {
    e.preventDefault();
    if (isValid(data, validate, validateParams)) {
      dispatch(setFetching(true));
      Post(
        'auth/registration', 
        data, 
        data => {
          set('token', data.token);
          dispatch(setUser(data.user));
        }, 
        error => {
          if (error.status == 422) {
            setErrors(errors => ({
              ...errors,
              email: error.data
            }))
          }
        }
      );
      dispatch(setFetching(false));
    }
  };

  return <SignUp fields={fields} onSubmit={onSubmit} />
}

export default SignUpContainer;