import React from 'react'
import './Menu.scss'

function Menu() {
    return (
        <div className='menu-container'>
            <a className='menu-item' href="./">Home</a>
            <a className='menu-item' href="./formulario">Cadastro</a>
            <a className='menu-item' href="./tabela">Cadastros</a>
        </div>
    )
}

export default Menu