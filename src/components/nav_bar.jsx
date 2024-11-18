import React from 'react';
import { useLocation } from 'react-router-dom';
import '../stylesheets/nav-bar/nav-bar.scss';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Determinar la ruta del botón dinámico
  const getArrowDestination = () => {
    if (location.pathname === '/Altura') {
      return '/Psicomotor'; // Si está en /Altura, enviar a /Psicomotor
    }
    if (location.pathname === '/Psicomotor') {
      return '/Altura'; // Si está en /Psicomotor, enviar a /Altura
    }
    return null; // No mostrar el botón en otras páginas
  };

  // Determinar el nombre de la página destino
  const getDestinationName = () => {
    if (location.pathname === '/Altura') {
      return 'Avance Psicomotor';
    }
    if (location.pathname === '/Psicomotor') {
      return 'Gráfico de Altura';
    }
      return '';
    };

  const arrowDestination = getArrowDestination();
  const destinationName = getDestinationName();

  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div className="nav-bar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Título */}
      <div className="nav-bar__title">
        <h1>Creciendo Juntos</h1>
      </div>

      {/* Botón Arrow dinámico */}
      {arrowDestination && (
        <Link className='link' to={arrowDestination}>
          <div className="nav-bar__image">
            <h1 className='textoflecha'>{destinationName}</h1>
            <img src={arrow} alt="Arrow Icon"className='flecha' />
          </div>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
