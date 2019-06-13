import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';
import { SearchPropTypes } from '../../assets/prop-types/Search.prop-types';

const Search = ({ value, change, onSubmit }) =>
   <Form title="search" buttonText="search" onSubmit={onSubmit} formClass="search-form">
      <Field value={value} name="search"placeholder="search" change={change} />
   </Form>

Search.propTypes = SearchPropTypes;

export default Search;