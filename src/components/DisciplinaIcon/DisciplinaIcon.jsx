import React from 'react'
import './DisciplinaIcon.scss'

function DisciplinaIcon(props){
    return (
        <div className='icon-container' onClick={props.onClick}>
            
            <div className='icon'>
                {props.icon}
            </div>

            <span className='icon-name'>{props.name}</span>
        </div>
    )
}

export default DisciplinaIcon