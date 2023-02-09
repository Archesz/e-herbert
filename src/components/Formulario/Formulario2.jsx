import React, {useState} from 'react'
import Form from './Form'
import './Formulario.scss'

function Formulario2(props) {

    const [cadastro, setCadastro] = useState("Estudante")

    return (
        <div className='formulario-container'>
            
            <span className='formulario-title'>Cadastro</span>

            <div className='formulario-tabs'>
                <div className='formulario-tab active' id="estudanteForm" onClick={() => {setCadastro("Estudante")}}>Estudante</div>
                <div className='formulario-tab' id="Form" onClick={() => {setCadastro("Professor")}}>Professor</div>
                <div className='formulario-tab' id="estudanteForm" onClick={() => {setCadastro("Colaborador")}}>Infraestrutura</div>
            </div>

            <Form type={cadastro} base={props.base}/>

        </div>
    )
}

export default Formulario2