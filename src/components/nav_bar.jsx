import React from 'react';
import '../stylesheets/nav-bar/nav-bar.scss';
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">
        <img src={logo} alt="Logo" className='nav-bar__logo'/>
      </div>
    </nav>
  );
};

export default NavBar;
