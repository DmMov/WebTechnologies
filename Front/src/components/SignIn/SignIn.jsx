import React from 'react';
import { func, bool } from 'prop-types';
import Field from '../_reusable/Field';
import Link from '../_reusable/CustomLink';
import { sign_in_data_type } from '../../Prop-types';
import Form from '../_reusable/Form';
import withSpin from '../withSpin';
import { FormPropTypes } from '../../assets/prop-types/Form.prop-types';

const SignIn = ({ fields, onSubmit }) => (
   <Form 
      formClass="sign-in-form" 
      title="sign in" 
      buttonText="sign in" 
      onSubmit={onSubmit}
   >
      <Link to="/sign-up" label="create new account" />
      {fields.map(({ name, value, error, placeholder, setValue, type}, i) => (
         <Field 
            key={i}
            name={name} 
            value={value} 
            error={error} 
            type={type} 
            setValue={setValue}
            placeholder={placeholder}
         />
      ))}
   </Form>
);

SignIn.propTypes = FormPropTypes;

export default withSpin(SignIn);