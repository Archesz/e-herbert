import React, { useState, useEffect } from 'react'
import './AdminView.scss'
import Select from 'react-select'
import CreatableSelect  from 'react-select/creatable';

const disciplinas = ["Matemática", "Física", "Química", "Biologia", "Geografia", "História", "Sociologia", "Filosofia", "Gramática", "Redação", "Literatura"]

function AdminView(props) {

    const frenteArea = document.querySelector("#frentes-area")

    const [professores, setProfessores] = useState(null);
    const [conteudos, setConteudos] = useState([]);

    const handleSelectChange = (selectedOption) => {
        setProfessores(selectedOption);
    };


    const addFrente = (event) => {
        event.preventDefault();
        let value = document.querySelector("#frentes").value
        document.querySelector("#frentes").value = ""
        
        setConteudos(conteudos.concat(value))
        
    };

    function getConteudos(){
        let conteudosDict = {};
        conteudos.map((conteudo) => {
            
            let values = document.querySelector(`#input-${conteudo}`)
            
            console.log(values)
            conteudosDict[conteudo] = [""]
        })

        return conteudosDict
    }
    
    function addMateria() {
        let nome = document.querySelector("#nomeMateria").value
        let frase = document.querySelector("#fraseMateria").value

        const professoresList = professores.map(({ value }) => value);
        const professoresDict = professoresList.reduce((acc, value) => {
            acc[value] = value;
            return acc;
        }, {});
        
        const conteudosDict = getConteudos()

        const disciplinaData = {
            "Nome": nome,
            "Frase": frase,
            "Professores": professoresDict,
            "Conteudos": conteudosDict
        }

        props.base.database().ref(`disciplinas/${nome}`).set(disciplinaData)
            .then(() => {
                console.log("Usuário adicionado com sucesso.")
                window.location.reload();
            })
            .catch((error) => {
                console.log("Erro ao adicionar usuário: ", error)
            })
    }

    function addQuestao(){
        let disciplina = document.querySelector("#disciplinaQuestao").value
        let assunto = document.querySelector("#assuntoQuestao").value
        let enunciado = document.querySelector("#enunciadoQuestao").value
        let gabarito = document.querySelector("#gabarito").value

        let questionData = {
            "Disciplina": disciplina,
            "Assunto": assunto,
            "Enunciado": enunciado,
            "Alternativas": {
                "A": document.querySelector("#alternativaA").value,
                "B": document.querySelector("#alternativaB").value,
                "C": document.querySelector("#alternativaC").value,
                "D": document.querySelector("#alternativaD").value,
                "E": document.querySelector("#alternativaE").value
            },
            "Gabarito": gabarito
        }

        props.base.database().ref(`Questões/${disciplina}`).set(questionData)
        .then(() => {
            console.log("Usuário adicionado com sucesso.")
            window.location.reload();
        })
        .catch((error) => {
            console.log("Erro ao adicionar usuário: ", error)
        })
    }

    const professoresList = [
        {value: "Jovi", label: "Jovi"},
        {value: "Samuca", label: "Samuca"},
        {value: "Profeta", label: "Profeta"},
        {value: "Pedro", label: "Pedro"},
        {value: "Lynn", label: "Lynn"},
        {value: "Nicolas", label: "Nicolas"},
        {value: "Asriel", label: "Asriel"},
        {value: "Guga", label: "Guga"},
        {value: "Helena", label: "Helena"},
        {value: "Alice", label: "Alice"},
        {value: "Roberto", label: "Roberto"},
        {value: "Wedley", label: "Wedley"},
        {value: "Ana Julia", label: "Ana Julia"},
        {value: "Lucas", label: "Lucas"},
        {value: "Luquinhas", label: "Luquinhas"},
        {value: "Nassif", label: "Nassif"},
        {value: "Bruna", label: "Bruna"},
        {value: "Alessandra", label: "Alessandra"},
        {value: "Sansao", label: "Sansao"},
        {value: "Alberto", label: "Alberto"},
        {value: "Rosa", label: "Rosa"},
        {value: "Paulista", label: "Paulista"},
        {value: "Uriel", label: "Uriel"},
        {value: "Mário", label: "Mário"}
      ]


    if (props.page === "cadastrarMateria") {
        return (
            <div className="view-container">

                <h3 className="view-name">Cadastro de Disciplinas</h3>

                <div className="form-materia">

                    <div className="form-group">
                        <label>Nome da Disciplina:</label>
                        <input id='nomeMateria' className='input-text' placeholder="Ex: Matemática" required/>
                    </div>

                    <div className="form-group">
                        <label>Frase:</label>
                        <input id='fraseMateria' className='input-text' placeholder="Ex: A ciência que estuda a lógica e a natureza numérica." required/>
                    </div>

                    <div className="form-group">
                        <label>Professores:</label>
                        <Select options={professoresList} isMulti onChange={handleSelectChange} className="input-text"/>
                    </div>

                    <div className="form-group">
                        <label>Matérias (Frentes)</label>
                        <input type="text" className="input-text" id="frentes"/>
                        <button onClick={addFrente}>+</button>
                    </div>

                    <div className="frentes-area" id="frentes-area">
                        {conteudos.map((frente, index) => {
                            return(
                                <span id="span-frente">{frente}</span>
                            )
                        })}
                    </div>

                    <button onClick={addMateria}>Adicionar</button>
                </div>

            </div>
        )
    } else if(props.page == "cadastrarQuestoes"){
        return (
            <div className="view-container">

                <h3 className="view-name">Cadastro de Questões</h3>

                <div className="form-materia">

                    <div className="form-group">
                        <label>Selecione a Disciplina:</label>
                        <select id="disciplinaQuestao">
                            {disciplinas.map((disciplina) =>{
                                return(
                                    <option value={disciplina}>{disciplina}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Assunto:</label>
                        <input id='assuntoQuestao' className='input-text' placeholder="Ex: Álgebra" required/>
                    </div>

                    <div className="form-group">
                        <label>Enunciado:</label>
                        <textarea id='enunciadoQuestao' className='input-areatext' placeholder="" required/>
                    </div>
                    
                    <div className='questao-container'>
                        <span>a)</span>
                        <input id="alternativaA" />
                    </div>
                    
                    <div className='questao-container'>
                        <span>b)</span>
                        <input id="alternativaB"/>
                    </div>

                    <div className='questao-container'>
                        <span>c)</span>
                        <input id="alternativaC"/>
                    </div>

                    <div className='questao-container'>
                        <span>d)</span>
                        <input id="alternativaD"/>
                    </div>

                    <div className='questao-container'>
                        <span>e)</span>
                        <input id="alternativaE" />
                    </div>

                    <div className="form-group">
                        <label>Alternativa Correta</label>
                        <select id="gabarito" className='select'>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>

                    <button onClick={addQuestao}>Adicionar</button>
                </div>

            </div>
        )
    }
}

export default AdminView

/* 
import React, { useState } from 'react'
import './AdminView.scss'
import Select from 'react-select'

function AdminView(props) {

    const [professoresSelecionados, setProfessoresSelecionados] = useState([]);

    function teste(){
        let values = document.querySelector("#professores")
        const selectedOptions = Array.from(values.selectedOptions);
        const valoresSelecionados = selectedOptions.map((opcao) => ({ [opcao.label]: opcao.label }));

        console.log(valoresSelecionados)
    }

    function addMateria() {
        let nome = document.querySelector("#nomeMateria").value
        let frase = document.querySelector("#fraseMateria").value

        const disciplinaData = {
            "Nome": nome,
            "Frase": frase,
            "Professores": professoresSelecionados
        }

        props.base.database().ref(`disciplinas/${nome}`).set(disciplinaData)
            .then(() => {
                console.log("Usuário adicionado com sucesso.")
            })
            .catch((error) => {
                console.log("Erro ao adicionar usuário: ", error)
            })
    }

    const professores = [
        {value: "Jovi", label: "Jovi"},
        {value: "Samuca", label: "Samuca"},
        {value: "Profeta", label: "Profeta"},
        {value: "Pedro", label: "Pedro"},
        {value: "Lynn", label: "Lynn"},
        {value: "Nicolas", label: "Nicolas"},
        {value: "Asriel", label: "Asriel"},
        {value: "Guga", label: "Guga"},
        {value: "Helena", label: "Helena"},
        {value: "Alice", label: "Alice"},
        {value: "Roberto", label: "Roberto"},
        {value: "Wedley", label: "Wedley"},
        {value: "Ana Julia", label: "Ana Julia"},
        {value: "Lucas", label: "Lucas"},
        {value: "Luquinhas", label: "Luquinhas"},
        {value: "Nassif", label: "Nassif"},
        {value: "Bruna", label: "Bruna"},
        {value: "Alessandra", label: "Alessandra"},
        {value: "Sansao", label: "Sansao"},
        {value: "Alberto", label: "Alberto"},
        {value: "Rosa", label: "Rosa"}
      ]

    if (props.page === "cadastrarMateria") {
        return (
            <div className="view-container">

                <h3 className="view-name">Cadastro de Disciplinas</h3>

                <div className="form-materia">

                    <div className="form-group">
                        <label>Nome da Disciplina:</label>
                        <input id='nomeMateria' className='input-text' placeholder="Ex: Matemática" required/>
                    </div>

                    <div className="form-group">
                        <label>Frase:</label>
                        <input id='fraseMateria' className='input-text' placeholder="Ex: A ciência que estuda a lógica e a natureza numérica." required/>
                    </div>

                    <div className="form-group">
                        <label>Professores: </label>
                        <Select
                            isMulti
                            options={professores}
                            className="input-text"
                            classNamePrefix="select"
                            id="professores"
                        />
                    </div>

                    <button onClick={teste}>teste</button>
                    <button onClick={addMateria}>Adicionar</button>
                </div>

            </div>
        )
    }
}

export default AdminView

*/