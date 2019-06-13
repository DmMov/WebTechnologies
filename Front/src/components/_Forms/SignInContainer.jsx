import React from 'react';
import { connect } from 'react-redux';
import { set } from 'js-cookie';
import { setUserData } from '../../store/user/actions';
import { setIsLoading } from '../../store/actions';
import SignIn from './SignIn';
import { isEmail } from 'validator';
import { signInOtherInfo } from 'assets/data/signInOtherInfo'
import { generateFormFields } from '../../assets/functions/generateFormFields';
import { Post } from '../../assets/services/request.service';
import { SignInContainerPropTypes } from '../../assets/prop-types/SignInContainer.prop-types';
import { api } from '../../assets/constants/api';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const INITIAL_STATE = {
   email: '',
   password: '',
};

const SignInContainer = ({ setUserData, setIsLoading }) => {
   document.title = 'Education | Sign In'; 

   const { data, errors, change, setErrors, validate } = useFormValidation(INITIAL_STATE, INITIAL_STATE);
   
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

   const onSuccess = (data) => {
      set('user', data, { expires: 7 });
      set('token', data.token, { expires: 7 });
      setUserData(data);
   }
   const onError = (error) => {
      setErrors(() => ({
         email: 'there is something wrong',
         password: 'or maybe there is something wrong here'
      }));
   }
   const onSubmit = e => {
      e.preventDefault();
      const dataKeys = Object.keys(data);
      const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
      const isValid = validateResults.find(value => value == false) != false && true; 

      if (isValid) {
         setIsLoading(true);
         Post(api + 'auth/login', data, onSuccess, onError, null);
         setIsLoading(false);
      }
   };
   return <SignIn fields={fields} onSubmit={onSubmit} />;
}

SignInContainer.propTypes = SignInContainerPropTypes;

export default connect(null, { setUserData, setIsLoading })(SignInContainer);