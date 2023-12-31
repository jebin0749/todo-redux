import React from 'react';
import './Navbar.scss';

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Contact</a></li>
        <li><a href="/contact">Logout</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
