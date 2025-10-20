import React from 'react'
import "../styling/styling.css"
import "../styling/mediaQuery.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <div id='AboutSec' className=''>
        <div className="sectionWrap py-3 container d-flex justify-content-between">
            <div className="leftWrap">
                <DotLottieReact
                src="https://lottie.host/325bdfc9-8cb7-4e83-9646-5a6ffbe1f5cc/qshwMlILTZ.lottie"
                className='svg'
                // style= {{width: "500px", heigth: "600px"}}
                loop
                autoplay
                />
            </div>
            <div className="rightWrap">
                Where
            </div>
        </div>
    </div>
  )
}

export default About