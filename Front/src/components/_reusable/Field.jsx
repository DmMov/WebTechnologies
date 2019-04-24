import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

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

Field.propTypes = {
   name: string.isRequired,
   placeholder: string.isRequired,
   value: string.isRequired,
   type: string.isRequired,
   setValue: func.isRequired
}

export default Field;