import React from 'react'
import './Navbar.scss'

import logo from '../../assets/logo.png'

// Icones
import { AiFillHome } from 'react-icons/ai'

function Navbar() {
    return (
        <div className='navbar-container'>

            <img src={logo} className='navbar-logo' alt="Logo Herbert"/>
            
            <div className='navbar-items'>
                <AiFillHome className="navbar-item"/>   
            </div>

        </div>
    )
}

export default Navbar