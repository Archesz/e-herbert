import React from 'react'
import './View.scss'

import Home from '../../pages/Home'
import Disciplinas from '../../pages/Disciplinas'
import Header from '../Header/Header'
import Disciplina from '../../pages/Disciplina'

function View(props) {
    let user = props.data

    if(props.page === "Home"){
        
        return (
            <div className="view-container">
                <Header user={user}/>
                <Home user={user}/>
            </div>
        )
    } else if(props.page === "Disciplinas"){
        return (
            <div className="view-container">
                <Header user={user}/>
                <Disciplinas setState={props.setState} state={props.page}/>
            </div>
        )
    } else if(props.page === "Disciplina"){
        return (
            <div className='view-container'>
                <Header user={user}/>
                <Disciplina />
            </div>
        )
    }
}

export default View