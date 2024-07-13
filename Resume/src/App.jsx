import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateResume from './Pages/CreateResume'
import EditResume from './Pages/EditResume'
import ViewResume from './Pages/ViewResume'
import ViewAllResume from './Pages/ViewAllResume'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-resume' element={<CreateResume />} />
        <Route path='/edit-resume/:id' element={<EditResume />} />
        <Route path='/view-resume/:id' element={<ViewResume />} />
        <Route path='/view-all-resume' element={<ViewAllResume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App