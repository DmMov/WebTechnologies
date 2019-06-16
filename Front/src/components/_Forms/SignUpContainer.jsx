import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import SignUp from './SignUp';
import { setUserData } from '../../store/user/actions';
import { setLoading } from '../../store/actions';
import { isEmail } from 'validator'; 
import { generateFormFields } from '../../assets/functions/generateFormFields';
import { signUpOtherInfo } from '../../assets/data/signUpOtherInfo';
import { SignUpContainerPropTypes } from '../../assets/prop-types/SignUpContainer.prop-types';
import { Post } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
const INITIAL_STATE = {
   email: '',
   name: '',
   lastName: '',
   password: '',
   repeat: '',
   age: ''
};
const SignUpContainer = ({ setUserData, setLoading }) => {
   document.title = 'Education | Sign Up';
   const { data, errors, change, setErrors, validate } = useFormValidation(INITIAL_STATE, INITIAL_STATE);

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
   const onSuccess = (data) => {
      Cookies.set('user', data, { expires: 7 });
      Cookies.set('token', data.token, { expires: 7 });
      setUserData(data);
   }
   const onError = (error) => {
      if (error.status == 422) {
         setErrors(errors => ({
            ...errors,
            email: error.response.data
         }))
      }
   }
   const onSubmit = e => {
      e.preventDefault();
      const dataKeys = Object.keys(data);
      const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
      const isValid = validateResults.find(value => value == false) != false && true;
      if (isValid) {
         setLoading(true);
         Post(api + 'auth/registration', data, onSuccess, onError, null);
         setLoading(false);
      }
   };
   return <SignUp fields={fields} onSubmit={onSubmit} />
}

SignUpContainer.propTypes = SignUpContainerPropTypes;

export default connect(null, { setUserData, setLoading })(SignUpContainer);