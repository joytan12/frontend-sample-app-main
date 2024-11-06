import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login_page'
import SignupPage from '../pages/signup_page'
import HomePage from '../pages/home_page'
<<<<<<< HEAD
import Contacto from '../pages/contacto'
import Psicomotor from '../pages/Psicomotor'

=======
>>>>>>> 5a535008f553f607d86a5923a5bf7f526c6e1732
import NavBar from '../components/nav_bar'
import Altura from '../pages/Altura'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
<<<<<<< HEAD
            <Route path='/' element={<HomePage />} />
            <Route path='/psicomotor' element={<Psicomotor />} />
            <Route path='/altura' element={<Altura />} />
            <Route path='/informe' element={<Altura />} />
            <Route path='/contacto' element={<Contacto />} />
=======
            <Route path='/' element={<LoginPage />} />
            <Route path='/Registro' element={<SignupPage />} />
            <Route path='/Inicio' element={<HomePage />} />
>>>>>>> 5a535008f553f607d86a5923a5bf7f526c6e1732
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
