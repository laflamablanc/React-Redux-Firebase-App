import React from 'react'
import 'materialize-css';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';



const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default NavBar