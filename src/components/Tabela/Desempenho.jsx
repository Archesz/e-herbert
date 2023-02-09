import React from 'react'
import './Desempenho.scss'

function Desempenho(props) {
    
    return (
        <div className={`desempenho-container `}>
            <div className='row'>
                <span className='disciplina'>{props.name}</span>
                <span className='desempenho-nivel'>{props.nivel}</span>
            </div>

            <span className='desempenho-label'>Nota Média (Simulados): {props.simulados}</span>
            <span className='desempenho-label'>Nota Média (Herbertech): {props.herbertech}</span>
            <span className='desempenho-label'>Situação: Em avaliação.</span>
        </div>
    )
}

export default Desempenho