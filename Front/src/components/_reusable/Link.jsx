import React from 'react';
import { Link as RL, Route } from 'react-router-dom';
import cx from 'classnames';
import { LinkPropTypes } from '../../assets/prop-types/Link.prop-types';

const Link = ({ label, to, active }) =>
   <Route 
      path={to}
      exact={active}
      children={({ match }) => (
         <RL className={cx('link', !!match && 'active')} to={to}>
            {label}
         </RL>
      )}
   />

Link.propTypes = LinkPropTypes;

export default Link;