import React from 'react';
import cx from 'classnames';
import { FieldPropTypes } from '../../assets/prop-types/Field.prop-types';

const Field = ({ name, placeholder, value, error, type, setValue }) => (
   <label 
      htmlFor={`id-${name}`} 
      className={
         cx(
            'field', 
            !!name && `${name}-field`, 
            !!error && 'error', 
            !!value && 'filled'
         )
      }
   >
      <input 
         className="input"
         id={`id-${name}`} 
         type={type} 
         name={name}
         value={value} 
         onChange={setValue} 
         autoComplete="off"
      />
      <span className="placeholder">{placeholder}</span>
      {!!error && <span className="error-text">{error}</span>}
   </label>
);

Field.defaultProps = {
   type: 'text',
   error: '',
};

Field.propTypes = FieldPropTypes;

export default Field;