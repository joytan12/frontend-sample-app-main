import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ControlsPage from '../pages/controls_page'
import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar/>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/controles' element={<ControlsPage />} />
            <Route path='/tratamiento' element={<LightbulbPage />} />
            <Route path='/informe' element={<LightbulbPage />} />
            <Route path='/contectos' element={<LightbulbPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default Layout