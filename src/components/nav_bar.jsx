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
        controles
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/tratamiento'
      >
        tratamiento
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/informe'
      >
        informe
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/contacto'
      >
        contacto
      </NavLink>
    </nav>
  )
}
 
export default NavBar
