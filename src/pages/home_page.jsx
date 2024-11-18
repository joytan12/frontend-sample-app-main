import React from 'react'
import { NavLink } from 'react-router-dom'
import bgImage from '../assets/bgimage.png'

import '../stylesheets/home-page/home-page.scss';

export const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{
        margin: '0px',
        padding: '60px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top -110px',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        height: '70vh'
      }}
    >
      <div class="box">
        <h1 class="titulo">Seguimiento del Desarrollo Infantil</h1>
        <h2 class="texto">
        Bienvenido a nuestra plataforma, diseñada para acompañarte en cada etapa del crecimiento de tu hijo.
        Proporcionamos herramientas visuales y prácticas que te ayudarán a entender su desarrollo y a tomar decisiones informadas 
        para su bienestar.<br></br>
        ¡Descubre el poder de cuidar y crecer juntos!
        </h2>
        <div className="buttons">
          <NavLink to="/Psicomotor" className="button">
            Avance Psicomotor
          </NavLink>
          <NavLink to="/Altura" className="button">
            Gráficos de Altura
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage
