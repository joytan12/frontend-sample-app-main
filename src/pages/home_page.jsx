import React from 'react'
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
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '70vh', // Ajusta según sea necesario
      }}
    >
      <h1>Lorem Ipsum</h1>
      <h2>Relleno ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <div className="buttons">
        <button className='button'>Avance Psicomotor</button>
        <button className='button'>Gráficos de Altura</button>
      </div>
    </div>
  )
}

export default HomePage
