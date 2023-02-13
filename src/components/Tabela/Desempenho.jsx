import React from 'react'
import './Desempenho.scss'

function getColor(name){
    if(name === "Matematica"){
        return "#D64933"
    } else if(name === "Biologia" || name === "Fisica" || name === "Quimica"){
        return "#0C7C59"
    } else if(name === "Português" || name === "Literatura"){
        return "#58A4B0"
    } else if(name === "Geografia" || name === "Sociologia" || name === "Filosofia"){
        return "#F6AA1C"
    }
}

function Desempenho(props) {
    
    let color = getColor(props.name)

    return (
        <div className={`desempenho-container`} style={{border: `1px solid ${color}`}}>
            <div className='row'>
                <span className='disciplina' style={{color: `${color}`}}>{props.name}</span>
                <span className='desempenho-nivel'>{props.nivel}</span>
            </div>

            <span className='desempenho-label'>Nota (Simulados): {props.simulados}</span>
            <span className='desempenho-label'>Nota (Herbertech): {props.herbertech}</span>
            <span className='desempenho-label'>Situação: Em avaliação.</span>
        </div>
    )
}

export default Desempenho