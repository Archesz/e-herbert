import React, {useState} from 'react'
import Form from './Form'
import './Formulario.scss'

function Formulario2() {

    const [cadastro, setCadastro] = useState("Estudante")

    return (
        <div className='formulario-container'>
            
            <span className='formulario-title'>Cadastro</span>

            <div className='formulario-tabs'>
                <div className='formulario-tab active' onClick={() => {setCadastro("Estudante")}}>Estudante</div>
                <div className='formulario-tab' onClick={() => {setCadastro("Professor")}}>Professor</div>
                <div className='formulario-tab' onClick={() => {setCadastro("Colaborador")}}>Colaborador</div>
            </div>

            <Form type={cadastro}/>

        </div>
    )
}

export default Formulario2