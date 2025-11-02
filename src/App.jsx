import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Layout Components/Nav'
import Footer from './Layout Components/Footer'
import Landing from './landingPage/Landing'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quad',
      // once: true
    });
  }, [])
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