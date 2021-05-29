import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
             <Link className="navbar-brand" to="/">
                <h1>LAB - WikiCountries</h1>
            </Link>
        </div>
    )
}

export default Navbar
