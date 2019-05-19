import React from 'react';
import cx from 'classnames';
import { ErrorPropTypes } from '../../assets/prop-types/Error.prop-type';

const Error = ({ errorClass, code, title, message }) => (
   <div className={cx('error-container', !!errorClass && errorClass, 'grid')}>
      <h1 className="error-code">{code}</h1>
      <h1 className="error-title">{title}</h1>
      <span className="error-message">{message}</span>
   </div>
);

Error.propTypes = ErrorPropTypes;

export default Error;