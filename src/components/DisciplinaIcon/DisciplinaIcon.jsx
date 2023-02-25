import React from 'react'
import './DisciplinaIcon.scss'

function goTo(){
    window.location.assign("./disciplina")
}

function DisciplinaIcon(props){
    return (
        <div className='icon-container' onClick={goTo}>
            
            {props.icon}

            <span className='icon-name'>{props.name}</span>
        </div>
    )
}

export default DisciplinaIcon