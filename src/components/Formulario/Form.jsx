import React from 'react'
import './Formulario.scss'

import jsPDF from 'jspdf';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDZc7R_-lLK9xKfa4_610JI7Izk4b831Xc",
    authDomain: "crudherbert.firebaseapp.com",
    databaseURL: "https://crudherbert-default-rtdb.firebaseio.com",
    projectId: "crudherbert",
    storageBucket: "crudherbert.appspot.com",
    messagingSenderId: "382234945560",
    appId: "1:382234945560:web:e0e3b7df6c372bc513fb6d",
    measurementId: "G-RBB092Q5HF"
};

firebase.initializeApp(firebaseConfig);

/* Funções Auxiliar */

function generatePDF(){

    let nome = document.querySelector("#nome").value
    let nascimento = document.querySelector("#nascimento").value
    let rg = document.querySelector("#rg").value
    let cpf = document.querySelector("#cpf").value
    let email = document.querySelector("#email").value
    let cep = document.querySelector("#cep").value
    let numero = document.querySelector("#numero").value
    let telefone = document.querySelector("#telefone").value
    let celular = document.querySelector("#celular").value
    let curso = document.querySelector("#curso").value
    let periodo = document.querySelector("#periodo").value


    try {
        const doc = new jsPDF();
        let img = new Image();
        // Write in document
        // doc.addImage('./logo.PNG', 'PNG', 15, 15, 50, 50);
        doc.setFontSize(13)
        doc.text(`Termo de compromisso – 2023 | ____ Campinas ___ de Janeiro de 2023`, 15, 10);

        doc.setFontSize(13)
        doc.setFont('times');

        doc.text(`Nome:`, 15, 40);
        doc.text(`${nome}`, 30, 40);

        doc.text(`Data de Nascimento:`, 15, 115);
        doc.text(`${nascimento}`, 145, 115);

        doc.text(`RG:`, 280, 115);
        doc.text(`${rg}`, 305, 115);

        doc.text(`CPF:`, 15, 135);
        doc.text(`${cpf}`, 55, 135);

        doc.text(`Email:`, 280, 135);
        doc.text(`${email}`, 320, 135);

        doc.text(`CEP:`, 280, 155);
        doc.text(`${cep} - Nº ${numero}`, 320, 155);

        doc.text(`Curso:`, 15, 175);
        doc.text(`${curso}`, 70, 175);

        doc.text(`Periodo:`, 15, 195);
        doc.text(`${periodo}`, 70, 195);

        doc.text(`Cel:`, 280, 195);
        doc.text(`${celular}`, 305, 195);

        doc.text(`Cel:`, 280, 195);
        doc.text(`${telefone}`, 305, 195);

        doc.save('teste-projeto-herbert.pdf');

    } catch (error) {
        console.error(error);
    }
}

function getUsersCount() {
    let usersCount = 0;
    firebase.database().ref("usuarios").on("value", (snapshot) => {
        usersCount = snapshot.numChildren() + 1;
    });
    return usersCount;
}

function getUsersCountTeacher() {
    let usersCount = 0;
    firebase.database().ref("professores").on("value", (snapshot) => {
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

function createIdProfessor() {
    let number = getUsersCountTeacher();

    const numberString = number.toString().padStart(4, '0');

    let id = `HSP${numberString}`
    return id
}

function cadastrar() {

    let id = createId();

    let nome = document.querySelector("#nome").value
    let nascimento = document.querySelector("#nascimento").value
    let rg = document.querySelector("#rg").value
    let cpf = document.querySelector("#cpf").value
    let email = document.querySelector("#email").value
    let cep = document.querySelector("#cep").value
    let numero = document.querySelector("#numero").value
    let telefone = document.querySelector("#telefone").value
    let celular = document.querySelector("#celular").value
    let curso = document.querySelector("#curso").value
    let periodo = document.querySelector("#periodo").value

    const userData = {

        // Dados Formulário
        id: id,
        nome: nome,
        email: email,
        celular: celular,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        curso: curso,
        periodo: periodo,
        cep: cep,
        numero: numero,
        nascimento: nascimento,

        // Dados de Desempenho
        desempenho: {
            "Matematica": { "Tempo_Questao": [], "Nota": 0 },
            "Português": { "Tempo_Questao": [], "Nota": 0 },
            "Quimica": { "Tempo_Questao": [], "Nota": 0 },
            "Fisica": { "Tempo_Questao": [], "Nota": 0 },
            "Biologia": { "Tempo_Questao": [], "Nota": 0 },
            "Geografia": { "Tempo_Questao": [], "Nota": 0 },
            "História": { "Tempo_Questao": [], "Nota": 0 },
            "Sociologia": { "Tempo_Questao": [], "Nota": 0 },
            "Filosofia": { "Tempo_Questao": [], "Nota": 0 },
            "Simulados": 0
        },

        // Dados Cursinho
        sala: "A definir",

        // Dados Socioeconomicos
        genero: "",
        etnia: "",
        escolaridade: "",
        tipo_escola: "",
        primeira_opcao: "",
        acesso_internet: "",
        renda_media: ""
    };

    firebase.database().ref(`usuarios/${id}`).set(userData)
        .then(() => {
            console.log("Usuário adicionado com sucesso.")
        })
        .catch((error) => {
            console.log("Erro ao adicionar usuário: ", error)
        })
}

function cadastrarProfessor() {
    let id = createIdProfessor();

    const userData = {
        id: id,
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        celular: document.querySelector("#celular").value,
        cpf: document.querySelector("#cpf").value,
        curso: document.querySelector("#cursoFaculdade").value,
        periodo: document.querySelector("#disciplina").value,
        nascimento: document.querySelector("#nascimento").value,
        bolsista: "Não"
    };

    firebase.database().ref(`professores/${id}`).set(userData)
        .then(() => {
            console.log("Usuário adicionado com sucesso.")
        })
        .catch((error) => {
            console.log("Erro ao adicionar usuário: ", error)
        })
}

/* Validação e Ajustes nos Campos */



/* Validação e Ajustes nos Campos */

function Form(props) {

    if (props.type === "Estudante") {
        return (
            <form className='form'>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Nome Completo</label>
                        <input type="text" placeholder='Ex: João Vitor Souza de Alcantara' required className='input big' id='nome' autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input type="email" placeholder='Ex: cursinhoherbert@gmail.com' required className='input big' id='email' autoComplete="off" />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>CPF</label>
                        <input type="text" placeholder='Ex: 230.720.428-88' required id="cpf" className='input half' autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>RG</label>
                        <input type="text" placeholder='Ex: 11.222.333-4' required className='input half' id="rg" autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Data de Nascimento</label>
                        <input type="date" required className='input half' id="nascimento" />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>CEP</label>
                        <input type="number" placeholder='Ex: 13060-492' required className='input half' id="cep" autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Nº</label>
                        <input type="number" placeholder='Ex: 17' required className='input small' id="numero" autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Celular</label>
                        <input type="text" placeholder='Ex: (19) 99539-7660' required className='input half' id="celular" autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Telefone</label>
                        <input type="text" placeholder='Ex: (11) 3229-2988' required className='input half' id="telefone" />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Curso</label>
                        <select className='select half' id="curso">
                            <option value="Vestibular">Pré-Vestibular</option>
                            <option value="Técnico">Pré-Tecnico</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Periodo</label>
                        <select className='select half' id="periodo">
                            <option value="">A definir</option>
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                        </select>
                    </div>

                </div>


                <div className='btn-rows'>
                    <button className='btn cadastrar' onClick={cadastrar} type="button">Cadastrar</button>
                    <button className='btn cancelar'>Cancelar</button>  
                    <button className='btn termo' type="button" onClick={generatePDF}>Termo</button>
                </div>

            </form>
        )
    } else if (props.type === "Professor") {
        return (
            <form className='form'>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Nome Completo</label>
                        <input type="text" placeholder='Ex: João Vitor Souza de Alcantara' required className='input big' id='nome' />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input type="email" placeholder='Ex: cursinhoherbert@gmail.com' required className='input big' id='email' />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>CPF</label>
                        <input type="text" placeholder='Ex: 230.720.428-88' required id="cpf" className='input half' />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>RG</label>
                        <input type="text" placeholder='Ex: 11.222.333-4' required className='input half' id="rg" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Data de Nascimento</label>
                        <input type="date" required className='input half' id="nascimento" />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>CEP</label>
                        <input type="number" placeholder='Ex: 13060-492' required className='input half' id="cep" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Nº</label>
                        <input type="number" placeholder='Ex: 17' required className='input small' id="numero" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Celular</label>
                        <input type="text" placeholder='Ex: (19) 99539-7660' required className='input half' id="celular" />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Curso</label>
                        <input type="text" placeholder='Ex: Ciência da Computação' required className='input half' id="cursoFaculdade" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Disciplina</label>
                        <select className='select half' id="disciplina">
                            <optgroup label='Exatas'>
                                <option value="Matemática">Matemática</option>
                            </optgroup>
                            <optgroup label='Natureza'>
                                <option value="Física">Física</option>
                                <option value="Química">Química</option>
                                <option value="Biologia">Biologia</option>
                            </optgroup>
                            <optgroup label='Humanas'>
                                <option value="Geografia">Geografia</option>
                                <option value="História">História</option>
                                <option value="Sociologia">Sociologia</option>
                                <option value="Filosofia">Filosofia</option>
                            </optgroup>
                            <optgroup label='Linguagens'>
                                <option value="Português">Português</option>
                                <option value="Literatura">Literatura</option>
                                <option value="Redação">Redação</option>
                            </optgroup>
                        </select>
                    </div>

                </div>

                <div className='btn-rows'>
                    <button className='btn cadastrar' onClick={cadastrarProfessor} type="button">Cadastrar</button>
                    <button className='btn cancelar'>Cancelar</button>
                </div>

            </form>
        )
    }

}

export default Form