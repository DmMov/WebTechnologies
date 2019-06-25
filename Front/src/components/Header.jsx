import React from 'react';
import { HeaderPropTypes } from '../assets/prop-types/Header.prop-types';
import Link from './_General/Link';

const Header = ({ fullName, onSignOut }) =>
  <header id="main-header">
    <section className="logo-section">
      <h1 className="logo">courses logo</h1>
    </section>
    <nav className="menu">
      <li className="menu-item">
        <Link label="users" to="/admin/users" />
      </li>
      <li className="menu-item">
        <Link label="courses" to="/admin/courses" />
      </li>
      <li className="menu-item">
        <Link label="schedule" to="/admin/schedule" />
      </li>
    </nav>
    <span className="full-name">{fullName}</span>
    <button className="btn sign-out-btn" onClick={onSignOut}>sign out</button>
  </header>

Header.propTypes = HeaderPropTypes;
export default Header;