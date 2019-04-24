import React from 'react';
import { string, bool } from 'prop-types';
import { Link, Route } from 'react-router-dom';
import cx from 'classnames';

const CustomLink = ({ label, to, active }) => (
   <Route 
      path={to}
      exact={active}
      children={({match}) => (
         <Link 
            className={cx('link', !!match && 'active')} 
            to={to}
         >
            {label}
         </Link>
      )}
   />
);

CustomLink.propTypes = {
   label: string.isRequired,
   to: string.isRequired,
   active: bool
}

export default CustomLink;