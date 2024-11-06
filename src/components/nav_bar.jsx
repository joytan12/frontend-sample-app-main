import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
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