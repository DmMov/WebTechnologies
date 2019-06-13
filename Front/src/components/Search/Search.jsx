import React from 'react';
import Field from '../_reusable/Field';
import Form from '../_reusable/Form';
import { SearchPropTypes } from '../../assets/prop-types/Search.prop-types';

const Search = ({ value, setValue, onSubmit }) =>
   <Form title="search" buttonText="search" onSubmit={onSubmit} formClass="search-form">
      <Field value={value} name="search"placeholder="search" setValue={setValue} />
   </Form>

Search.propTypes = SearchPropTypes;

export default Search;