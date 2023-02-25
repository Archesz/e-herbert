import React, {useState} from 'react'
import './Navbar.scss'

import logo from '../../assets/logo.png'

// Icones
import { TbHome2, TbBooks, TbQuestionMark, TbCertificate } from 'react-icons/tb'

function Navbar(props) {

    const [name, setName] = useState("Home")
    
    function init(){
        document.querySelector(`#page-${name}`).classList.add("active")
    }

    function changePage(page){
        props.setState(page)
        document.querySelector(`#page-${name}`).classList.remove("active")
        
        setName(page)
        document.querySelector(`#page-${page}`).classList.add("active")
    }

    return (
        <div className='navbar-container' onLoad={init}>
            
            <div className='img-logo' onClick={() => {changePage("Home")}}>
                <img src={logo} className='navbar-logo' alt="Logo Herbert"/>
            </div>
            
            <div className='navbar-items'>

                <TbHome2 className="navbar-icon"/>   
 
                <TbBooks className="navbar-icon"/>   
                
                <TbQuestionMark className="navbar-icon"/>   
                
                <TbCertificate className="navbar-icon"/>   
            
            </div>

        </div>
    )
}

export default Navbar