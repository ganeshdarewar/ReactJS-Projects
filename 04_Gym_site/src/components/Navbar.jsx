import React, { useState } from 'react'
import './navbar.css'
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <nav>
            <div className="container nav__container">
                <Link onClick={() => setIsNavShowing(false)} to='/' className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={() => setIsNavShowing(prev => !prev)}
                                    className={({ isActive, }) => isActive ? 'active-nav' : ''} to={path}>{name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button
                    onClick={() => setIsNavShowing(prev => !prev)}
                    className="nav__toggle-btn">

                    {
                        isNavShowing ? <IoClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar
