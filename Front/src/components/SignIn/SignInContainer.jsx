import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { set } from 'js-cookie';
import withForm from '../withForm';
import { setUserData } from '../../store/user/actions';
import { setIsLoading } from '../../store/actions';
import { sign_in_data_type } from '../../Prop-types';
import SignIn from './SignIn';
import { isEmail } from 'validator';
import { signInOtherInfo } from 'assets/constants/data/signInOtherInfo'
import { generateFormFields } from '../../assets/constants/functions/generateFormFields';
import { postRequest } from '../../assets/services/request.service';

const SignInContainer = ({ data, errors, setValue, setErrors, setUserData, validate, setIsLoading }) => {
   document.title = 'Education | Sign In'; 
   
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
   const fields = generateFormFields(data, errors, setValue, signInOtherInfo);

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
         postRequest('auth/login', data, onSuccess, onError, null);
         setIsLoading(false);
      }
   };
   return (
      <SignIn 
         fields={fields}
         onSubmit={onSubmit}
      />
   );
}

SignInContainer.propTypes = {
   data: sign_in_data_type,
   errors: sign_in_data_type,
   setValue: func.isRequired,
   validate: func.isRequired,
}

const initialState = {
   email: '',
   password: '',
};

const WrappedSignInContainer = withForm(initialState, initialState)(SignInContainer)

const mapStateToProps = () => ({});

const mapDispatchToProps = { setUserData, setIsLoading };

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSignInContainer);