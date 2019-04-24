import React from 'react';
import Field from '../_reusable/Field';
import Form from '../_reusable/Form';
import { string, func } from 'prop-types';

const Search = ({ value, setValue, onSubmit }) => (
   <Form 
      title="search" 
      buttonText="search" 
      onSubmit={onSubmit} 
      formClass="search-form" 
   >
      <Field 
         value={value}
         name="search"
         placeholder="search"
         setValue={setValue}
      />
   </Form>
);

Search.propTypes = {
   value: string.isRequired,
   setValue: func.isRequired,
   onSubmit: func.isRequired
}

export default Search;