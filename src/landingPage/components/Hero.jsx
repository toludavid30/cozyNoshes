import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Draggable,DrawSVGPlugin,MotionPathPlugin,ScrollTrigger,ScrollToPlugin);
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const Hero = () => {
    const [heroFood, setHeroFood] = useState("CRAC")
    const [showCRAC, setShowCRAC] = useState(true)
    const [showPYAE, setShowPYAE] = useState(false)
    const [showSFAC, setShowSFAC] = useState(false)
    const [showFRAC, setShowFRAC] = useState(false)
    const prevHeroFood = useRef(heroFood)
    
    const path = "M200,-150 Q100,75 0,0";
    const path2 = "M-400,-250 Q-150,-150 0,0"

    const foodBoxBackgroundON = (elem) =>{
        const box = document.getElementById(elem)
        if (box) box.style.backgroundColor = "#6266754b"
        box.style.transition = "background linear 1s"
    }
    const foodBoxBackgroundOFF = (elem) =>{
        const box = document.getElementById(elem)
        if (box) box.style.backgroundColor = "transparent"
    }

    useEffect(()=>{
        const prev = prevHeroFood.current

        prevHeroFood.current = heroFood;

        foodBoxBackgroundON(heroFood)
        


        // Example SVG path: Move to (250,-200), curve to (0,0) with control (125,100)

    if(heroFood === "CRAC" && prev !== "CRAC"){
    
    ////// In animation for CRAC
    setShowCRAC(true)
    
    }

    if(prev === "CRAC" && heroFood !== "CRAC"){
        foodBoxBackgroundOFF(prev)
        const CRACanimationOut = gsap.timeline({
            onComplete: () => {
               setShowCRAC(false) 
            }
        })

        //CRAC out animation 
        CRACanimationOut.to(".CRACpic",
    {
        opacity: 1,
        duration: 1.5,
        motionPath:{
            path: path2,
            type: "soft",
            align: false
            // curviness: 3
        },
        reversed: true,
        ease: "power2.inOut",
    })
    
    CRACanimationOut.to(".CRACinfo", {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.5
    }, "-=75%")
        CRACanimationOut.play()
    }

    if(heroFood === "PYAE" && prev !== "PYAE"){
    ///PYAE animation in
    setShowPYAE(true)
    }

    ///PYAE animation out

    if(prev === "PYAE" && heroFood !== "PYAE"){
        foodBoxBackgroundOFF(prev)
        const PYAEanimationOut = gsap.timeline({
            onComplete: () => {
               setShowPYAE(false)
            }
        })
        
        //PYAE out animation 
        PYAEanimationOut.to(".PYAEpic",
    {
        opacity: 1,
        duration: 1.5,
        motionPath:{
            path: path2,
            type: "soft",
            align: false
            // curviness: 3
        },
        reversed: true,
        ease: "power2.inOut",
    })
    
    PYAEanimationOut.to(".PYAEinfo", {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.5
    }, "-=75%")
        PYAEanimationOut.play()
    }

    if(heroFood === "SFAC" && prev !== "SFAC"){
    ///SFAC animation in
    setShowSFAC(true)
    }

    ///SFAC animation out

    if(prev === "SFAC" && heroFood !== "SFAC"){
        foodBoxBackgroundOFF(prev)
        const SFACanimationOut = gsap.timeline({
            onComplete: () => {
               setShowSFAC(false)
            }
        })
        
        //SFAC out animation 
        SFACanimationOut.to(".SFACpic",
    {
        opacity: 1,
        duration: 1.5,
        motionPath:{
            path: path2,
            type: "soft",
            align: false
            // curviness: 3
        },
        reversed: true,
        ease: "power2.inOut",
    })
    
    SFACanimationOut.to(".SFACinfo", {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.5
    }, "-=75%")
        SFACanimationOut.play()
    }

    if(heroFood === "FRAC" && prev !== "FRAC"){
    ///FRAC animation in
    setShowFRAC(true)
    }

    ///FRAC animation out

    if(prev === "FRAC" && heroFood !== "FRAC"){
        foodBoxBackgroundOFF(prev)
        const FRACanimationOut = gsap.timeline({
            onComplete: () => {
               setShowFRAC(false)
            }
        })
        
        //FRAC out animation 
        FRACanimationOut.to(".FRACpic",
    {
        opacity: 1,
        duration: 1.5,
        motionPath:{
            path: path2,
            type: "soft",
            align: false
            // curviness: 3
        },
        reversed: true,
        ease: "power2.inOut",
    })
    
    FRACanimationOut.to(".FRACinfo", {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.5
    }, "-=75%")
        FRACanimationOut.play()
    }
        
    },[heroFood])

    useEffect(()=>{
    gsap.set(".CRACpic", { x: 200, y: -100, opacity: 0 });
    gsap.set(".CRACinfo", { x: 100, opacity: 0 });

    const CRACanimationIn = gsap.timeline()

    CRACanimationIn.to(".CRACpic",
    {
        opacity: 1,
        duration: 2,
        x: 0,
        y: 0, 
        motionPath:{
            path: path,
            type: "soft",
            align: false
            // curviness: 3
        },
        ease: "power2.inOut"
    })
    CRACanimationIn.to(".CRACinfo",   {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2
    }, "-=75%")
    CRACanimationIn.play();

    },[showCRAC])
    useEffect(()=>{
    gsap.set(".PYAEpic", { x: 200, y: -100, opacity: 0 });
    gsap.set(".PYAEinfo", { x: 100, opacity: 0 });

    const PYAEanimationIn = gsap.timeline()

    PYAEanimationIn.to(".PYAEpic",
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
    PYAEanimationIn.to(".PYAEinfo", {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2
    }, "-=75%")

    PYAEanimationIn.play();
    },[showPYAE])
    useEffect(()=>{
    
    gsap.set(".SFACpic", { x: 200, y: -100, opacity: 0 });
    gsap.set(".SFACinfo", { x: 100, opacity: 0 });

    const SFACanimationIn = gsap.timeline()

    SFACanimationIn.to(".SFACpic",
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
    SFACanimationIn.to(".SFACinfo", {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2
    }, "-=75%")

    SFACanimationIn.play();
    },[showSFAC])

    useEffect(()=>{

    gsap.set(".FRACpic", { x: 200, y: -100, opacity: 0 });
    gsap.set(".FRACinfo", { x: 100, opacity: 0 });

    const FRACanimationIn = gsap.timeline()

    FRACanimationIn.to(".FRACpic",
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
    FRACanimationIn.to(".FRACinfo", {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2
    }, "-=75%")

    FRACanimationIn.play();
    },[showFRAC])
  return (
    <div id='heroSection' className="py-4">
        <div className="heroWrapper container">

            <div className="foodDisplays d-flex align-items-center justify-content-evenly">
            {
                showCRAC && (
                <>
                    <div id="CRACpic" className="foodPic CRACpic py-2">
                    <img src="/coconut rice and chicken.png" alt="" />
                    </div>
                    <div className="foodInfo CRACinfo">
                    <h2 className='foodText w-75'>
                        Coconut Rice and Chicken
                    </h2>
                    <div className="rating">
                        <img src="/4 stars.png" alt=""/>
                    </div>
                    </div>
                </>
                )}
                {
                showPYAE &&(
                <>
                    <div  className="foodPic py-2 PYAEpic ">
                    <img src="/Pounded Yam and Efo.png" alt="" />
                    </div>
                    <div className="foodInfo PYAEinfo">
                    <h2 className='foodText w-75'>
                        Pounded Yam and Efo
                    </h2>
                    <div className="rating">
                        <img src="/5 stars.png" alt=""/>
                    </div>
                    </div>
                </>
                )}

                {
                showSFAC && (
                <>
                    <div className="foodPic SFACpic py-2">
                    <img src="/stir fly and chicken.png" alt="" />
                    </div>
                    <div className="foodInfo SFACinfo">
                    <h2 className='foodText w-75'>
                        Stir Fry and Chicken 
                    </h2>
                    <div className="rating">
                        <img src="/4 stars.png" alt=""/>
                    </div>
                    </div>
                </>
                )}

                {
                showFRAC && (
                <>
                    <div className="foodPic FRACpic py-2">
                        <img src="/Fiesta_Grilled_Chicken_d2yqlz-Photoroom.png" alt="" />
                    </div>
                    <div className="foodInfo FRACinfo">
                    <h2 className='foodText w-75'>
                        Fried Rice and Chicken
                    </h2>
                    <div className="rating">
                        <img src="/5 stars.png" alt=""/>
                    </div>
                    </div>
                </>
                )}

            </div>
            <div id="foodBoxesContainer" className="foodBoxesContainer d-flex flex-wrapp justify-content-between py-3 py-md-0">
                <div id="CRAC" className="foodBoxes rounded rounded-4 py-2 btn" onClick={() =>
                setHeroFood("CRAC")}>
                    <div className="pic">
                        <img src="/coconut rice and chicken.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Coconut Rice and Chicken
                    </div>
                </div>
                <div id="PYAE" className="foodBoxes py-2 btn rounded rounded-4" onClick={() =>
                setHeroFood("PYAE")}>
                    <div className="pic">
                        <img src="/Pounded Yam and Efo.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Pounded Yam and Efo
                    </div>
                </div>
                <div id="SFAC" className="foodBoxes py-2 btn rounded rounded-4" onClick={() =>
                setHeroFood("SFAC")}>
                    <div className="pic">
                        <img src="stir fly and chicken.png" alt="" />
                    </div>
                    <div className="info text-center m-auto w-50">
                        Stir Fry and Chicken
                    </div>
                </div>
                <div id="FRAC" className="foodBoxes py-2 btn rounded rounded-4" onClick={() =>
                setHeroFood("FRAC")}>
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