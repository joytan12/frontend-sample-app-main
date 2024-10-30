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
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/controles'
      >
        Controles
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/tratamiento'
      >
        Tratamiento
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/informe'
      >
        Informe
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/contacto'
      >
        Contacto
      </NavLink>
    </nav>
  )
}
export default NavBar