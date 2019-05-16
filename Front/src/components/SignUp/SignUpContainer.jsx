import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import SignUp from './SignUp';
import withForm from '../withForm';
import { setUserData } from '../../store/user/actions';
import { setIsLoading } from '../../store/actions';
import { sign_up_data_type } from '../../Prop-types';
import { isEmail } from 'validator'; 
import { generateFormFields } from '../../assets/constants/generateFormFields';
import { signUpOtherInfo } from '../../assets/constants/signUpOtherInfo';

const SignUpContainer = ({ data, errors, setValue, setErrors, setUserData, validate, setIsLoading }) => {
   document.title = 'Education | Sign Up';
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
   const fields = generateFormFields(data, errors, setValue, signUpOtherInfo);
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
         setIsLoading(true);
         postRequest('auth/registration', data, onSuccess, onError, null);
         setIsLoading(false);
      }
   };
   return <SignUp fields={fields} onSubmit={onSubmit} />
}

SignUpContainer.propTypes = {
   data: sign_up_data_type,
   errors: sign_up_data_type,
   setValue: func.isRequired,
   validate: func.isRequired,
}

const initialState = {
   email: '',
   name: '',
   lastName: '',
   password: '',
   repeat: '',
   age: ''
};

const WrappedSignUpContainer = withForm(initialState, initialState)(SignUpContainer);

const mapStateToProps = ({ general: { isLoading } }) => ({ isLoading });
const mapDispatchToProps = { setUserData, setIsLoading };

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSignUpContainer);