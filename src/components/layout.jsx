import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Contacto from '../pages/contacto'
import Psicomotor from '../pages/Psicomotor'

import NavBar from '../components/nav_bar'
import Altura from '../pages/Altura'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Interfaz energética</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/psicomotor' element={<Psicomotor />} />
            <Route path='/altura' element={<Altura />} />
            <Route path='/informe' element={<Altura />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
