import React from 'react';
import cx from 'classnames';
import { FormPropTypes } from '../../assets/prop-types/Form.prop-types';

const Form = ({ formClass, onSubmit, children, buttonText, title }) =>
   <form className={cx('grid', 'form', !!formClass && formClass)} onSubmit={onSubmit}>
      <h1 className={cx('title', !!formClass && `${formClass}-title`)}>{title}</h1>
      {children}
      <button type="submit" className="btn sub-btn"> {buttonText} </button>
   </form>

Form.propTypes = FormPropTypes;

Form.defaultProps = {
   title: 'title',
   buttonText: 'submit'
}

export default Form;