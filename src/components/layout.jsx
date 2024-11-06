import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login_page'
import SignupPage from '../pages/signup_page'
import HomePage from '../pages/home_page'
// import Contacto from '../pages/contacto'
// import Psicomotor from '../pages/Psicomotor'

import NavBar from '../components/nav_bar'
import Altura from '../pages/Altura'
import Psicomotor from '../pages/psicomotor'

   const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Registro' element={<LoginPage />} />
            <Route path='/Inicio' element={<SignupPage />} />
            <Route path='/psicomotor' element={<Psicomotor />} />
            <Route path='/altura' element={<Altura />} />
            <Route path='/informe' element={<Altura />} />
            <Route path='/contacto' element={<Altura />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
