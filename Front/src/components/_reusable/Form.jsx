import React from 'react';
import cx from 'classnames';
import { string, func } from 'prop-types';
import { Alert } from 'antd';

const Form = ({ formClass, onSubmit, children, buttonText, title }) => (
   <form 
      className={cx('grid', 'form', !!formClass && formClass)} 
      onSubmit={onSubmit}
   >
      <h1 className={cx('title', !!formClass && `${formClass}-title`)}>{title}</h1>
      {children}
      <button 
         type="submit" 
         className={cx('btn', 'sub-btn', !!formClass && `${formClass}-btn`)}
      >
         {buttonText}
      </button>
   </form>
);

Form.propTypes = {
   formClass: string,
   onSubmit: func.isRequired,
   buttonText: string,
   title: string
}

Form.defaultProps = {
   title: 'title',
   buttonText: 'submit'
}

export default Form;