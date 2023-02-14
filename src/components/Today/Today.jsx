import React from 'react'
import './Today.scss'

const hoje = new Date();
const dia = hoje.toLocaleDateString();

const aulas = [
    {"Disciplina": "Matemática", "Assunto": "Triângulo Pitagórico."},
    {"Disciplina": "Português", "Assunto": "Conceitos básicos de Linguagem."},
    {"Disciplina": "Biologia", "Assunto": "Mitocondria e Células."}
]

function Today() {
    return (
        <div className='today-container'>

            <span className='today-name'>Herbert Today</span>
            <span className='today'>{dia}</span>

            <div className='aulas'>
                {aulas.map((aula) => {
                    return(
                        <div className='aula'>
                            <span className='aula-name'>{aula["Disciplina"]}</span>
                            <span title={aula["Assunto"]} className='aula-assunto' alt={aula["Assunto"]}>{aula["Assunto"]}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Today