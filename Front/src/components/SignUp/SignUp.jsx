import React from 'react';
import { func } from 'prop-types';
import Field from '../_reusable/Field';
import Link from '../_reusable/CustomLink';
import { sign_up_data_type } from '../../Prop-types';
import Form from '../_reusable/Form';
import withSpin from '../withSpin';

const SignUp = ({ data, errors, setValue, onSubmit }) => (
   <Form 
      formClass="sign-up-form" 
      title="sign up" 
      buttonText="sign up" 
      onSubmit={onSubmit}
   >
      <Link 
         to="/sign-in" 
         label="go back to login" 
      />  
      <Field 
         name="email" 
         value={data.email} 
         error={errors.email}
         setValue={setValue}
         placeholder="email"
      />

      <Field 
         name="name" 
         value={data.name} 
         error={errors.name} 
         setValue={setValue}
         placeholder="name"
      />

      <Field 
         name="lastName" 
         value={data.lastName} 
         error={errors.lastName} 
         setValue={setValue}
         placeholder="last name"
      />
         
      <Field 
         name="password" 
         value={data.password} 
         error={errors.password} 
         type="password" 
         setValue={setValue}
         placeholder="password"
      />
         
      <Field 
         name="repeat" 
         value={data.repeat} 
         error={errors.repeat} 
         type="password" 
         setValue={setValue}
         placeholder="repeat password"
      />
      <Field 
         name="age" 
         value={data.age} 
         error={errors.age} 
         type="number" 
         setValue={setValue}
         placeholder="age"
      />
   </Form>
);

SignUp.propTypes = {
   data: sign_up_data_type,
   errors: sign_up_data_type,
   setValue: func.isRequired,
   onSubmit: func.isRequired
}

export default withSpin(SignUp);