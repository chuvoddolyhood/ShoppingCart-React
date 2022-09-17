import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Chuhood.store</h3>

            <nav ref={navRef}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Product</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FontAwesomeIcon icon={faClose} ></FontAwesomeIcon>
                </button>
            </nav>

            <div>
                <button className='nav-btn-cart'>
                    <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon>
                </button>

                <button className='nav-btn' onClick={showNavbar}><FontAwesomeIcon icon={faBars} ></FontAwesomeIcon></button>
            </div>

        </header>
    )
}

export default Navbar