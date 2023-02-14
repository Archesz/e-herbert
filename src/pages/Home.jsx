import React from 'react'
import '../styles/home.scss'

import {AiOutlineNotification} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import News from '../components/News/News'
import Today from '../components/Today/Today'
import Hecomend from '../components/Hecomend/Hecomend'
import Overview from '../components/Overview/Overview'

function Home(props) {

    let user = props.user

    return (

        <div className='home-container'>

            <div className='home-header'>

                <div className='header-welcome'>
                    <h2 className='home-title'>Olá, {user.nome}</h2>
                    <span>Futuro Cientista da Computação.</span>

                </div>  

                <div className='header-items'>
                    <AiOutlineNotification className='header-icon'/>
                    <BiMessageRounded className='header-icon'/>
                    
                    <div className='avatar'></div>

                </div>

            </div>

            <div className='home-area'>

                <div className='home-left'>

                    <Overview name="Jovi" course={"Ciência da Computação"}/>

                </div>

                <div className='home-right'>
                    <News />
                    <Today />
                    <Hecomend />
                </div>

            </div>

        </div>

    )
}

export default Home