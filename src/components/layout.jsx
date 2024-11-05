import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login_page'
import SignupPage from '../pages/signup_page'
import HomePage from '../pages/home_page'
import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/Registro' element={<SignupPage />} />
            <Route path='/Inicio' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
