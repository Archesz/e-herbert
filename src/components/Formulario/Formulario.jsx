import React from 'react'
import './Formulario.scss'

// Conexão com Firebase:

import firebase from "firebase/compat/app";
import "firebase/compat/database";


firebase.initializeApp(firebaseConfig);

// Pegar o tamanho do banco de dados para adicionar um novo ID
function getUsersCount() {
    let usersCount = 0;
    firebase.database().ref("usuarios").on("value", (snapshot) => {
        usersCount = snapshot.numChildren() + 1;
    });
    return usersCount;
}

function createId() {
    let date = new Date();
    let year = date.getFullYear().toString().slice(-2);
    let number = getUsersCount();

    const numberString = number.toString().padStart(4, '0');

    let id = `HS${year}${numberString}`
    return id
}

// Adicionar um usuário ao banco de dados
function adicionarUsuario() {

    let id = createId();

    const userData = {
        id: id,
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        celular: document.querySelector("#celular").value,
        telefone: document.querySelector("#telefone").value,
        cpf: document.querySelector("#cpf").value,
        rg: document.querySelector("#rg").value,
        curso: document.querySelector("#curso").value,
        periodo: document.querySelector("#periodo").value,
        cep: document.querySelector("#cep").value,
        numero: document.querySelector("#numero").value,

        desempenho: {
            "Matematica": 0,
            "Português": 0,
            "Quimica": 0,
            "Fisica": 0,
            "Biologia": 0,
            "Geografia": 0,
            "História": 0,
            "Sociologia": 0,
            "Filosofia": 0
        }

    };

    firebase.database().ref(`usuarios/${id}`).set(userData)
        .then(() => {
            console.log("Usuário adicionado com sucesso.")
        })
        .catch((error) => {
            console.log("Erro ao adicionar usuário: ", error)
        })
}

/* Funções */

function Formulario() {
    return (
        <div className='formulario-container'>

            <div className='form-field'>
                <span className='form-title'>Informações Pessoais</span>

                <div className='row'>
                    <div className='form-group half'>
                        <label className='form-label'>Nome Completo</label>
                        <input className='form-input-text full' type="text" id="nome" placeholder='Ex: João Vitor Souza de Alcantara'/>
                    </div>

                    <div className='form-group half'>
                        <label className='form-label'>Email</label>
                        <input className='form-input-text' type="email" placeholder='Ex: cursinhoherbert@gmail.com' id="email"/>
                    </div>

                </div>
                
                <div className='row'>

                    <div className='form-group small'>
                        <label className='form-label'>CPF</label>
                        <input className='form-input-text' type="text" id="cpf" placeholder='Ex: 12345678900'/>
                    </div>

                    <div className='form-group small'>
                        <label className='form-label'>RG</label>
                        <input className='form-input-text' type="text" id="rg" placeholder='Ex: 01234567899'/>
                    </div>
                    
                    <div className='form-group'>
                        <label className='form-label'>Nascimento</label>
                        <input className='form-input-date' type="date" id="nascimento"/>
                    </div>
                    
                    <div></div>

                </div>

            </div>

            <div className='form-field'>
                <span className='form-title'>Informações de Contato</span>
                
                <div className='row'>
                    <div className='form-group'>
                        <label className='form-label'>Celular</label>
                        <input type="tel" className='form-input-text' id="celular"/>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Telefone</label>
                        <input type="tel" className='form-input-text' id="telefone"/>
                    </div>

                </div>

                <div className='row'>
                    <div className='form-group'>
                        <label className='form-label'>CEP</label>
                        <input className='form-input-text' type="text" id="cep"/>
                    </div>

                    <div className='form-group verySmall'>
                        <label className='form-label'>Nº</label>
                        <input type="number" className='form-input-text' id="numero"/>
                    </div>

                </div>

            </div>

            <div className='form-field'>
                <span className='form-title'>Informações do Curso</span>

                <div className='row'>

                    <div className='form-group'>
                        <label className='form-label'>Curso</label>
                        <select className='form-select' id="curso">
                            <option value="Vestibular">Pré-Vestibular</option>
                            <option value="Tecnico">Pré-Técnico</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Periodo</label>
                        <select className='form-select' id="periodo">
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                        </select>
                    </div>

                </div>

            </div>

            <button onClick={adicionarUsuario} className="btn-cadastrar">Cadastrar</button>
        </div>
    )
}

export default Formulario;