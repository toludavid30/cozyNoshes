import Hero from "./components/Hero"
import "./styling/styling.css"
import "./styling/mediaQuery.css"
import React from 'react'
import About from "./components/About"
import Menu from "./components/Menu"

const Landing = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Menu/>
    </>
  )
}

export default Landing