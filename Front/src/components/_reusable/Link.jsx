import React from 'react';
import { string, bool } from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

const Link = ({ label, to, active }) => (
   <Route 
      path={to}
      exact={active}
      children={({ match }) => (
         <RouterLink 
            className={cx('link', !!match && 'active')} 
            to={to}
         >
            {label}
         </RouterLink>
      )}
   />
);

Link.propTypes = {
   label: string.isRequired,
   to: string.isRequired,
   active: bool
}

export default Link;