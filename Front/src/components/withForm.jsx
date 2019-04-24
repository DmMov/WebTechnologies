import React, { useState } from 'react';
const getDefaultValues = (initialState, requiredFields) => Component => props => {
   const [data, setData] = useState(initialState);
   const [errors, setErrors] = useState(requiredFields);

   const setValue = ({currentTarget}) => {
      const { value, name } = currentTarget;
      setData(data => ({
         ...data, 
         [name]: value.trim()
      }));
      setErrors(errors => ({
         ...errors,
         [name]: ''
      }));
   };

   const validate = (name, value, { condition, errorText }) => {
      if (value.trim() == '') {
         setErrors(errors => ({
               ...errors,
               [name]: 'this field can not be empty',
            })
         );
         return false;
      }

      if (condition) {
         setErrors(errors => ({
            ...errors,
            [name]: errorText
         }));
         return false;
      }

      return true;
   };

   return (
      <Component 
         {...props} 
         data={data}
         errors={errors}
         setValue={setValue}
         validate={validate}
         setErrors={setErrors}
      />
   );
};

export default getDefaultValues;