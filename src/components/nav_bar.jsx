import React from 'react';
import { useLocation } from 'react-router-dom';
import '../stylesheets/nav-bar/nav-bar.scss';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-bar__title">
        <h1>Creciendo Juntos</h1>
      </div>
      {!isHomePage && (
        <a href="# ">
          <div className="nav-bar__image">
            <img src={arrow} alt="Arrow Icon" />
          </div>
        </a>
      )}
    </nav>
  );
};

export default NavBar;