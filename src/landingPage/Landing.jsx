import Hero from "./components/Hero"
import "./styling/styling.css"
import "./styling/mediaQuery.css"
import React from 'react'
import About from "./components/About"

const Landing = () => {
  return (
    <>
      <Hero/>
      <About/>
    </>
  )
}

export default Landing