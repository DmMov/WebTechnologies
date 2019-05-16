import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import withForm from '../withForm';
import { setUserData } from '../../store/user/actions';
import { setIsLoading } from '../../store/actions';
import { sign_in_data_type } from '../../Prop-types';
import Axios from 'axios';
import { domain } from 'domain';
import SignIn from './SignIn';
import { isEmail } from 'validator';
import { signInOtherInfo } from 'assets/constants/signInOtherInfo'
import { generateFormFields } from 'assets/constants/generateFormFields';

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

   const onSubmit = e => {
      e.preventDefault();
      const dataKeys = Object.keys(data);
      const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
      const isValid = validateResults.find(value => value == false) != false && true; 

      if (isValid) {
         setIsLoading(true);
         Axios.post(`${domain}auth/login`, data)
         .then(({ data }) => {
            Cookies.set('user', data, { expires: 7 });
            Cookies.set('token', data.token, { expires: 7 });
            setIsLoading(false);
            setUserData(data);
         })
         .catch(error => {
            if(!!error.response) {
               setIsLoading(false);
               setErrors(() => ({
                  email: 'there is something wrong',
                  password: 'or maybe there is something wrong here'
               }));
            }
         });
      }
      
   };
   return (
      <SignIn 
         data={data} 
         setValue={setValue}
         errors={errors}
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