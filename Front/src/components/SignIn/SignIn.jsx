import React from 'react';
import { func, bool } from 'prop-types';
import Field from '../_reusable/Field';
import Link from '../_reusable/CustomLink';
import { sign_in_data_type } from '../../Prop-types';
import Form from '../_reusable/Form';
import withSpin from '../withSpin';

const SignIn = ({ data, errors, setValue, onSubmit }) => (
   <Form 
      formClass="sign-in-form" 
      title="sign in" 
      buttonText="sign in" 
      onSubmit={onSubmit}
   >
      <Link to="/sign-up" label="create new account" />
      <Field 
         name="email" 
         value={data.email} 
         error={errors.email} 
         setValue={setValue}
         placeholder="email"
      />
      <Field 
         name="password" 
         value={data.password} 
         error={errors.password} 
         type="password" 
         setValue={setValue}
         placeholder="password"
      />
   </Form>
);

SignIn.propTypes = {
   data: sign_in_data_type,
   errors: sign_in_data_type,
   setValue: func.isRequired,
   onSubmit: func.isRequired,
}

export default withSpin(SignIn);