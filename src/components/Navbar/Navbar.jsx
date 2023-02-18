import React, {useState} from 'react'
import './Navbar.scss'

import logo from '../../assets/logo.png'

// Icones
import { AiFillHome } from 'react-icons/ai'
import { SlNotebook } from 'react-icons/sl'
import { IoGameControllerOutline } from 'react-icons/io5'
import { BiSpreadsheet } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

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
                <span className='logo-title'>Cursinho Popular Herbert de Souza</span>
            </div>
            
            <div className='navbar-items'>

                <div className='navbar-row' id="page-Home" onClick={() => {changePage("Home")}}>
                    <AiFillHome className="navbar-item"/>   
                    <span className='navbar-label'>Página Inicial</span>
                </div>

                <div className='navbar-row' id="page-Disciplinas" onClick={() => {changePage("Disciplinas")}}>
                    <SlNotebook className="navbar-item"/>   
                    <span className='navbar-label'>Disciplinas</span>
                </div>

                <div className='navbar-row' id="page-Quizz" onClick={() => {changePage("Quizz")}}>
                    <IoGameControllerOutline className="navbar-item"/>   
                    <span className='navbar-label'>Quizz</span>
                </div>

                <div className='navbar-row' id="page-Avaliacoes" onClick={() => {changePage("Avaliacoes")}}>
                    <BiSpreadsheet className="navbar-item"/>   
                    <span className='navbar-label'>Avaliações</span>
                </div>

                <div className='navbar-row' id="page-Configuracoes" onClick={() => {changePage("Configuracoes")}}>
                    <FiSettings className="navbar-item"/>   
                    <span className='navbar-label'>Configurações</span>
                </div>
            
            </div>

        </div>
    )
}

export default Navbar