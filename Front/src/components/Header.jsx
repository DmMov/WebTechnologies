import React from 'react';
import { string, func } from 'prop-types';

const Header = ({fullName, onSignOut}) => (
   <header id="main-header">
      <span className="full-name">{fullName}</span>
      <button className="btn sign-out-btn" onClick={onSignOut}>sign out</button>
   </header>
);

Header.propTypes = {
   fullName: string.isRequired,
   onSignOut: func.isRequired
}

export default Header;