import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

const Page = ({pageClass, children}) => (
   <div className={cx('page', 'grid', !!pageClass && pageClass)}>
      {children}
   </div>
);

Page.propTypes = {
   pageClass: string
}

export default Page;