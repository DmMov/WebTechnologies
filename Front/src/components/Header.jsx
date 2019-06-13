import React from 'react';
import { HeaderPropTypes } from '../assets/prop-types/Header.prop-types';

const Header = ({ fullName, onSignOut }) =>
   <header id="main-header">
      <span className="full-name">{fullName}</span>
      <button className="btn sign-out-btn" onClick={onSignOut}>sign out</button>
   </header>

Header.propTypes = HeaderPropTypes;
export default Header;