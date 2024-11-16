import React from 'react'
import bgImage from '../assets/bgimage.png'
import '../stylesheets/home-page/home-page.scss';

export const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '75vh', // Ajusta según sea necesario
      }}
    >
      <h1>Lorem Ipsum</h1>
      <h2>Relleno ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <h2> ~~~~~~~~~~~</h2>
      <div className="buttons">
        <button className='button'>Botón 1</button>
        <button className='button'>Botón 2</button>
      </div>
    </div>
  )
}

export default HomePage
