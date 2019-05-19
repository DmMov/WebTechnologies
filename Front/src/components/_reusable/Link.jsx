import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';
import { LinkPropTypes } from '../../assets/prop-types/Link.prop-types';

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

Link.propTypes = LinkPropTypes;

export default Link;