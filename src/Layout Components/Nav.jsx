import { Link } from "react-router-dom"
import "./styling/styling.css"
import "./styling/mediaQuery.css"


import React, { useState } from 'react'

const Nav = () => {
    const [isLoggedIn, setIsloggedIn] = useState(false)

    
  return (
    <div id="Nav"className="py-2">
        <div className="navWrapper container d-flex align-items-center justify-content-betweenn">
            <Link className="logoWrap" to="/">
                <img src="/Cozy__1_-removebg-preview.png" alt="" />
            </Link>
            {/* <div className="navSearch input-group">
                <span className='input-group-text'><i className="bi bi-search"></i></span>
                <input type="text" className="form-control border border-2"/>
            </div> */}
            <div className="navRight rounded rounded-5 py-2 py-md-3 px-4 px-md-5 d-nonee d-md-flex">
                <Link className="navLinks" to="">
                    Menu
                </Link>
                {isLoggedIn?
                    <Link className="navLinks" onClick={logOutUser}>Log Out</Link>
                    :
                    <Link className="navLinks" href="/auth">SignIn</Link>
                }
                <Link className="navLinks" to="">
                    Contact us
                </Link>
            </div>
            {/* <button
                        className="h-100 dropdown navbar-toggler d-md-none fs-4"
                        type="button"
                        aria-label="Toggle navigation"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            padding: '0 10px',
                            fontSize: '2rem'
                        }}
                        >
                        <span className="navbar-toggler-icon w-100 h-100" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-list fs-4 fs-md-6"></i>
                        </span>
                        <ul className="dropdown-menu h-auto">
                            <li><Link className="dropdown-item" to="/">Menu</Link></li>
                            <li><Link className="dropdown-item" to="/about">Contact us</Link></li>
                            <li>
                                {isLoggedIn?
                                <Link className="dropdown-item" onClick={logOutUser}>Log Out</Link>
                                :
                                <Link className="dropdown-item" href="/auth">SignIn</Link>
                            }      
                            </li>
                        </ul>
            </button> */}
        </div>
    </div>
  )
}

export default Nav