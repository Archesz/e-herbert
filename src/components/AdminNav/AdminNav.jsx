import React from 'react'
import './AdminNav.scss'
import logo from '../../assets/logo.png'
import { TbBooks } from 'react-icons/tb'

function AdminNav(){
    return (
        <div className="nav-container">
            
            <div className="nav-header">
                <img src={logo} alt="Logo Herbert"/>                
            </div>

            <div className="nav-items">

                <TbBooks className="nav-icon"/>

            </div>

        </div>
    )
}

export default AdminNav