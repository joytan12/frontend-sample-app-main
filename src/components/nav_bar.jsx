import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/image.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      {/* Logo de la barra de navegación */}
      <NavLink to='/' className='nav-bar__logo'>
        <img src={logo} alt='Logo' className='nav-bar__logo-img' />
      </NavLink>
      
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Iniciar Sesión
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/Registro'
      >
        Registrarse
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/Inicio'
      >
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/psicomotor'
      >
        Avances Psicomotor
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/altura'
      >
        Gráficos de altura
      </NavLink>
    </nav>
  )
}
export default NavBar