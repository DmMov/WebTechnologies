import { useState, useEffect } from 'react';

export const useFormValidation = (initialState, requiredFields) =>  {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(requiredFields);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [])

  const change = ({ target: { value, name, checked, type, files } }) => {
    const typedValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setData(data => ({
      ...data, 
      [name]: typedValue
    }));
    setErrors(errors => ({
      ...errors,
      [name]: ''
    }));
  };

  const reset = () => {
    setData(initialState);
    setErrors(requiredFields);
  }

  const validate = (name, value, { condition, errorText }) => {
    if (name != 'file') {
      if (value.trim() == '') {
        setErrors(errors => ({
            ...errors,
            [name]: 'this field can not be empty',
          })
        );
        return false;
      }
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

  return { data, errors, change, reset, validate, setErrors };
}