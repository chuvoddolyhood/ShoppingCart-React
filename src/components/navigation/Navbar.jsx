import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useEffect } from 'react';
import { auth } from '../config/Config';
import { useState } from 'react';
import { LogOut } from '../auth/Logout';

const Navbar = () => {
    const navRef = useRef();
    const [username, setUsername] = useState('')
    const [uid, setUid] = useState('')


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                setUsername(user.displayName)
                setUid(user.uid)
            } else {
                setUsername('')
                setUid('')
            }
        })
    }, [])

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <div style={{ display: 'flex' }}>
                <h3>Chuhood.store</h3>
                <h4>{username ? `Hi! ${username}` : ""} </h4>
            </div>

            <nav ref={navRef}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Product</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/products/add">Add Product</NavLink>
                <NavLink to="/users/add">User</NavLink>
                {uid ? <a onClick={LogOut} style={{ cursor: 'pointer' }}>Log out</a> : <NavLink to="/logIn">Log in</NavLink>}
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