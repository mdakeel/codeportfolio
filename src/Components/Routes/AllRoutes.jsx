import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { NavBar } from '../NavBar'
import { Home } from '../Home'
import { About } from '../About'
import { Experience } from '../Experience'
import { Project } from '../Project'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element=
        {
        <>
        <NavBar />
        <Home />
        </>
        } />
        <Route path='/about' element={<><About/></>} />
        <Route path='/experience' element={<><About/><Experience /></>} />
        <Route path='/project' element={<><About /><Experience /><Project /></>} />
    </Routes>
  )
}
