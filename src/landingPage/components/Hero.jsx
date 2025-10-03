import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Draggable,DrawSVGPlugin,MotionPathPlugin,ScrollTrigger,ScrollToPlugin);
import React, { useState } from 'react'
import { useEffect } from 'react'

const Hero = () => {
    const [heroFood, setHeroFood] = useState("CRAC")

    useEffect(()=>{
        // Example SVG path: Move to (250,-200), curve to (0,0) with control (125,100)
        const path = "M300,-200 Q125,100 0,0"

        const CRACanimation = gsap.timeline()

        // const points = [
        //     {x: 200, y: -100},
        //     {x: 100, y: -100},
        //     {x: 100, y: -50},
        //     {x: 50, y: -25},
        //     {x: 50, y: 0},
        //     {x: 0, y: 0}
        // ]

    CRACanimation.fromTo(".CRACpic",
    {
        x: 200,
        y: -100,
        opacity: 0,
        duration: 0,
        ease: "power2.inOut"
    },
    {
        opacity: 1,
        duration: 2,
        motionPath:{
            path: path,
            type: "soft",
            align: false
            // curviness: 3
        },
        ease: "power2.inOut"
    })
        CRACanimation.play();
    },[])
  return (
    <div id='heroSection'>
        <div className="heroWrapper container py-4">
            <div className="foodDisplays d-flex align-items-center justify-content-evenly p-4">
                <div className="foodPic CRACpic py-2">
                    <img src="/coconut rice and chicken.png" alt="" />
                </div>
                {/* <div className="foodPic py-2 PYAEpic">
                    <img src="/Pounded Yam and Efo.png" alt="" />
                </div> */}
                {/* <div className="foodPic SFACpic py-2">
                    <img src="/stir fly and chicken.png" alt="" />
                </div> */}
                {/* <div className="foodPic FRACpic py-2">
                    <img src="/Fiesta_Grilled_Chicken_d2yqlz-Photoroom.png" alt="" />
                </div> */}
                <div className="foodInfo CRACinfo">
                    <h2 className='foodText w-75'>
                        Coconut Rice and Chicken
                    </h2>
                    <div className="rating">
                        <img src="/public/4 stars.png" alt=""/>
                    </div>
                </div>
                {/* <div className="foodInfo PYAEinfo">
                    <h2 className='foodText w-75'>
                        Pounded Yam and Efo
                    </h2>
                    <div className="rating">
                        <img src="/public/5 stars.png" alt=""/>
                    </div>
                </div> */}
                {/* <div className="foodInfo SFACinfo">
                    <h2 className='foodText w-75'>
                        Stir Fry and Chicken 
                    </h2>
                    <div className="rating">
                        <img src="/public/4 stars.png" alt=""/>
                    </div>
                </div> */}
                {/* <div className="foodInfo FRACinfo">
                    <h2 className='foodText w-75'>
                        Fried Rice and Chicken
                    </h2>
                    <div className="rating">
                        <img src="/public/5 stars.png" alt=""/>
                    </div>
                </div> */}
            </div>
            <div className="foodBoxesContainer d-flex flex-wrapp justify-content-between">
                <div className="foodBoxes py-3">
                    <div className="pic">
                        <img src="/coconut rice and chicken.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Coconut Rice and Chicken
                    </div>
                </div>
                <div className="foodBoxes py-3">
                    <div className="pic">
                        <img src="/Pounded Yam and Efo.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Pounded Yam and Efo
                    </div>
                </div>
                <div className="foodBoxes py-3">
                    <div className="pic">
                        <img src="stir fly and chicken.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Stir Fry and Chicken
                    </div>
                </div>
                <div className="foodBoxes py-3">
                    <div className="pic">
                        <img src="/Fiesta_Grilled_Chicken_d2yqlz-Photoroom.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Fried Rice and Chicken
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero