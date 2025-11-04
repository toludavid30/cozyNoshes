import React, { useEffect } from 'react'
import "../styling/styling.css"
import "../styling/mediaQuery.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    // useEffect(()=>{
        
    // },[]
    // )
  return (
    <div id='AboutSec' className=''>
        <div className="sectionWrap py-3 py-md-5 container d-flex justify-content-between">
            
            <div className="rightWrap">
                <h2 data-aos="fade-up"> 
                    Where Flavour Meets Exquisiteness
                </h2>
                <h5 data-aos="fade-right">
                    Cozy Noshes is a small but passionate food brand based in Oyo State, dedicated to serving delicious, home-cooked meals at affordable prices. We offer fast and reliable local delivery, bringing flavour and convenience right to your doorstep.
                </h5>
            </div>

            <div  className="leftWrap" data-aos="zoom-in-up">
                <DotLottieReact
                src="https://lottie.host/325bdfc9-8cb7-4e83-9646-5a6ffbe1f5cc/qshwMlILTZ.lottie"
                className='svg'
                // style= {{width: "500px", heigth: "600px"}}
                loop
                autoplay
                />
            </div>
        </div>
    </div>
  )
}

export default About