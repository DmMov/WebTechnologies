import React from 'react';
import cx from 'classnames';
import { PagePropTypes } from '../../assets/prop-types/Page.prop-types';

const Page = ({pageClass, children}) => (
   <div className={cx('page', 'grid', !!pageClass && pageClass)}>
      {children}
   </div>
);

Page.propTypes = PagePropTypes;

export default Page;