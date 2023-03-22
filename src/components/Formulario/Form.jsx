import React, { useEffect, useState } from 'react'
import './Formulario.scss'

/* Validação e Ajustes nos Campos */

function Form(props) {

    let [nUsers, setnUsers] = useState(0)

    useEffect(() => {
        props.base.database().ref("usuarios").on("value", (snapshot) => {
            let usersCount = snapshot.numChildren() + 1;
            setnUsers(usersCount)
        });
    })

    function createId() {
        let date = new Date();
        let year = date.getFullYear().toString().slice(-2);
    
        const numberString = nUsers.toString().padStart(4, '0');
        
        let id = `HS${year}${numberString}`
        console.log(id)
        return id
    }

    function cadastrar() {

        let id = createId();
    
        let primeiroNome = document.querySelector("#firstNome").value
        let sobrenome = document.querySelector("#sobrenome").value
        let nascimento = document.querySelector("#nascimento").value
        let rg = document.querySelector("#rg").value
        let cpf = document.querySelector("#cpf").value
        let email = document.querySelector("#email").value
        let cep = document.querySelector("#cep").value
        let numero = document.querySelector("#numero").value
        let celular = document.querySelector("#celular").value
        let curso = document.querySelector("#curso").value
        let periodo = document.querySelector("#periodo").value
        let turma = document.querySelector("#turma").value

        const userData = {
            "ID": id,
            "Apelido": "",
            "Area": "",
            "CEP": cep,
            "Numero": numero,
            "Celular": celular,
            "Curso": curso,
            "Desempenho": {
              "Biologia": {
                "Nivel": 0,
                "Nome": "Biologia",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Filosofia": {
                "Nivel": 0,
                "Nome": "Filosofia",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Fisica": {
                "Nivel": 0,
                "Nome": "Fisica",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Geografia": {
                "Nivel": 0,
                "Nome": "Geografia",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Geral": {
                "Nivel": 0,
                "Nome": "Geral",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "História": {
                "Nivel": 0,
                "Nome": "História",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Literatura": {
                "Nivel": 0,
                "Nome": "Literatura",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Matematica": {
                "Nivel": 0,
                "Nome": "Matematica",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Português": {
                "Nivel": 0,
                "Nome": "Português",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Quimica": {
                "Nivel": 0,
                "Nome": "Quimica",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              },
              "Sociologia": {
                "Nivel": 0,
                "Nome": "Sociologia",
                "Nota": 0,
                "Nota_herbert": 0,
                "Nota_simulado": 0
              }
            },
            "Email": email,
            "Idade": "",
            "Conquistas": [
              {"Nome": "Pioneiro", "Label": "Sou da primeira turma da plataforma!"}, 
            ],
            "Nascimento": nascimento,
            "Primeira Opção": "",
            "Nivel": "Estudante",
            "Periodo": periodo,
            "Primeiro Nome": primeiroNome,
            "RG": rg,
            "CPF": cpf,
            "Senha": cpf,
            "Sobrenome": sobrenome,
            "Status": "Estudando",
            "Turma": turma,
            "URLFoto": "",
            "Universidade": "",
            "Social": {
              "Instagram": "",
              "Twitter": "",
              "Whatsapp": ""
            },
            "Level": 1
        }
    
        props.base.database().ref(`usuarios/${id}`).set(userData)
            .then(() => {
                console.log("Usuário adicionado com sucesso.")
            })
            .catch((error) => {
                console.log("Erro ao adicionar usuário: ", error)
            })
        
        window.location.reload();
        // generatePDF(nome, nascimento, rg, cpf, email, cep, numero, telefone, celular, curso, periodo);
    }

    if (props.type === "Estudante") {

        return (
            <form className='form'>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Primeiro Nome</label>
                        <input type="text" placeholder='Ex: João Vitor' required className='input big' id='firstNome' autoComplete="off" />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Sobrenome</label>
                        <input type="text" placeholder='Ex: Alcantara' required className='input big' id='sobrenome' autoComplete="off" />
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
                </div>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>Curso</label>
                        <select className='select half' id="curso">
                            <option value="A definir">A definir</option>
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

                    <div className='form-group'>
                        <label className='form-label'>Turma</label>
                        <select className='select half' id="turma">
                            <option value="">A definir</option>
                            <option value="Pixinguinha">Pixinguinha</option>
                            <option value="Laudelina">Laudelina</option>
                        </select>
                    </div>

                </div>


                <div className='btn-rows'>
                    <button className='btn cadastrar' onClick={cadastrar} type="button">Cadastrar</button>
                    <button className='btn cancelar'>Cancelar</button>  
                </div>

            </form>
        )
    }

}

export default Form