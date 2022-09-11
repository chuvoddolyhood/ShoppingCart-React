import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/users">User</NavLink>
        </div>
    )
}

export default Navbar