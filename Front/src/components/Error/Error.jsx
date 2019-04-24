import React from 'react';
import { number, string } from 'prop-types';
import cx from 'classnames';

const Error = ({ errorClass, code, title, message }) => (
   <div className={cx('error-container', !!errorClass && errorClass, 'grid')}>
      <h1 className="error-code">{code}</h1>
      <h1 className="error-title">{title}</h1>
      <span className="error-message">{message}</span>
   </div>
);

Error.propTypes = {
   errorClass: string,
   code: number,
   title: string,
   message: string
}

export default Error;