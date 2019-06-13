import React from 'react';
import Field from '../_reusable/Field';
import Link from '../_reusable/Link';
import Form from '../_reusable/Form';
import withSpin from '../withSpin';
import { FormsPropTypes } from '../../assets/prop-types/Forms.prop-types';

const SignUp = ({ fields, onSubmit }) =>
   <Form formClass="sign-up-form" title="sign up" buttonText="sign up" onSubmit={onSubmit}>
      <Link to="/sign-in" label="go back to login" />  
      { fields.map(field => <Field key={field.name} {...field} />) }
   </Form>

SignUp.propTypes = FormsPropTypes;

export default withSpin(SignUp);