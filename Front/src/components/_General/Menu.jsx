import React from 'react';
import { Link } from './Link';

const Menu = ({ menuId, links }) =>
  <nav id={menuId} className="menu">
    <ul className="links-wrap">
      { links.map(link => <Link key={link.to} {...link} />)}
    </ul>
  </nav>

export default Menu;