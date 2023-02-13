import React from 'react'
import '../styles/home.scss'

import {AiOutlineNotification} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import News from '../components/News/News'

function Home(props) {

    let user = props.user

    return (

        <div className='home-container'>

            <div className='home-header'>

                <div className='header-welcome'>
                    <h2 className='home-title'>Olá, {user.nome}</h2>
                    <span>"Não há vantagem alguma em viver a vida correndo."</span>

                </div>  

                <div className='header-items'>
                    <AiOutlineNotification className='header-icon'/>
                    <BiMessageRounded className='header-icon'/>
                    
                    <div className='avatar'></div>

                </div>

            </div>

            <News />

        </div>

    )
}

export default Home