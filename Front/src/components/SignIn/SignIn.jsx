import React from 'react';
import Field from '../_reusable/Field';
import Link from '../_reusable/Link';
import Form from '../_reusable/Form';
import withSpin from '../withSpin';
import { FormsPropTypes } from '../../assets/prop-types/Forms.prop-types';

const SignIn = ({ fields, onSubmit }) => (
   <Form 
      formClass="sign-in-form" 
      title="sign in" 
      buttonText="sign in" 
      onSubmit={onSubmit}
   >
      <Link to="/sign-up" label="create new account" />
      { fields.map(field => <Field key={field.name} {...field} />) }
   </Form>
);

SignIn.propTypes = FormsPropTypes;

export default withSpin(SignIn);