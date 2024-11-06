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
<<<<<<< HEAD
      <NavLink
        className={navLinkClass}
        to='/psicomotor'
      >
        psicomotor
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/altura'
      >
        altura
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
=======
>>>>>>> 5a535008f553f607d86a5923a5bf7f526c6e1732
    </nav>
  )
}
export default NavBar