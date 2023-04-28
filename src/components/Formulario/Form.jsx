import React, { useEffect, useState } from 'react'
import './Formulario.scss'

/* Validação e Ajustes nos Campos */

function Form(props) {

    let [nUsers, setnUsers] = useState(0)

    useEffect(() => {
        props.base.database().ref("usuarios")
            .orderByKey() // ordena pelos valores das chaves
            .limitToLast(1) // pega o último registro
            .on("value", (snapshot) => {
                // o objeto snapshot contém o último usuário
                let lastUser = snapshot.val();
                let lastUserKey = Object.keys(lastUser)[0];
                setnUsers(lastUserKey);
            });
    }, []);

    function obterSucessor(numeroString) {
        const numero = parseInt(numeroString.substr(2), 10); // extrai os 4 últimos dígitos e converte para inteiro
        const sucessor = numero + 1; // adiciona 1 ao valor inteiro
        const sucessorString = sucessor.toString().padStart(4, '0'); // converte o valor inteiro de volta para string e preenche com zeros à esquerda até ter 4 dígitos
        return `HS${sucessorString}`; // retorna a nova string com os 4 dígitos sucessores
    }

    function createId() {
        let date = new Date();
        let year = date.getFullYear().toString().slice(-2);

        const numberString = nUsers

        let id = obterSucessor(numberString);

        return id
    }

    function cadastrar() {

        let id = createId();
        
        let primeiroNome = ""
        let sobrenome = ""
        let nascimento = ""
        let rg = ""
        let cpf = document.querySelector("#cpf").value
        let email = ""
        let cep = ""
        let numero = ""
        let celular = ""
        let curso = ""
        let periodo = ""
        let turma = ""

        const userData = {
            "ID": id,
            "Complete": false,  
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
                { "Nome": "Pioneiro", "Label": "Sou da primeira turma da plataforma!" },
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
        
        alert("Cadastrado com Sucesso")
        window.location.reload();
        // generatePDF(nome, nascimento, rg, cpf, email, cep, numero, telefone, celular, curso, periodo);
    }

    if (props.type === "Estudante") {

        return (
            <form className='form'>

                <div className='form-row'>

                    <div className='form-group'>
                        <label className='form-label'>CPF</label>
                        <input type="text" placeholder='Ex: 230.720.428-88' required id="cpf" className='input half' autoComplete="off" />
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
