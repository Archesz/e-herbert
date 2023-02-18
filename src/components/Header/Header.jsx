import React from 'react'
import './Header.scss'

import {AiOutlineNotification} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'

function Header(props) {

    let user = props.user

    return (
        <div className='home-header'>

            <div className='header-welcome'>
                <h2 className='home-title'>Olá, {user.nome}</h2>
                <span>Futuro Universitário.</span>

            </div>

            <div className='header-items'>
                <AiOutlineNotification className='header-icon' />
                <BiMessageRounded className='header-icon' />

                <div className='avatar'></div>

            </div>

        </div>
    )
}

export default Header