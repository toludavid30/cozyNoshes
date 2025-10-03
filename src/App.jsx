import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Layout Components/Nav'
import Footer from './Layout Components/Footer'
import Landing from './landingPage/Landing'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App