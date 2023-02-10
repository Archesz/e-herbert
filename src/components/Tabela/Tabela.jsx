import React, { useState, useEffect } from 'react'
import './Tabela.scss'

import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs'
import Desempenho from './Desempenho';
import Menu from '../Menu/Menu';

function formatCPF(cpf) {
    // Remover pontos e hífen
    cpf = cpf.replace(/[.-]/g, "");

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Adicionar pontos e hífen
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpf;
}

function formatRG(rg) {
    return rg.slice(0, 2) + '.' + rg.slice(2, 5) + '.' + rg.slice(5, 8) + '-' + rg.slice(8);
}

function formatDate(date) {
    const dateArray = date.split("-");
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

function formatCEP(cep) {
    // Remover hífen
    cep = cep.replace(/[-]/g, "");

    // Verificar se o CEP tem 8 dígitos
    if (cep.length !== 8) {
        return false;
    }

    // Adicionar hífen
    cep = cep.replace(/(\d{5})(\d{3})/, "$1-$2");

    return cep;
}

function openUser() {
    return
}

function formatCel(cel) {
    // Verificar se o celular tem 11 dígitos
    if (cel.length !== 11) {
        return false;
    }

    // Adicionar formatação
    cel = cel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    return cel;
}

function Tabela(props) {

    const [usuarios, setUsuarios] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [filter, setFilter] = useState({"nome": "", "curso": "", "periodo": ""})

    function search() {
        let nome = document.querySelector("#filterName").value;
        let curso = document.querySelector("#filterCurso").value
        let periodo = document.querySelector("#filterPeriodo").value
        setFilter({"nome": nome, "curso": curso, "periodo": periodo});
        console.log(filter)

    }

    const handleRowClick = (selectedRow) => {
        setSelectedData(selectedRow);
        console.log(selectedData)
    };

    const handleClose = () => {
        setSelectedData(null);
    };

    useEffect(() => {
        const usuariosRef = props.base.database().ref("usuarios");
        usuariosRef.on("value", (snapshot) => {
            const usuarios = snapshot.val();
            const usuariosArray = [];
            for (let key in usuarios) {
                usuariosArray.push({
                    id: key,
                    nome: usuarios[key].nome,
                    email: usuarios[key].email,
                    rg: usuarios[key].rg,
                    cpf: usuarios[key].cpf,
                    nascimento: usuarios[key].nascimento,
                    cep: usuarios[key].cep,
                    numero: usuarios[key].numero,
                    curso: usuarios[key].curso,
                    periodo: usuarios[key].periodo,
                    genero: usuarios[key].genero,
                    primeira_opcao: usuarios[key].primeira_opcao,
                    sala: usuarios[key].sala,
                    universidade: usuarios[key].universidade,
                    celular: usuarios[key].celular,
                    telefone: usuarios[key].telefone,
                    desempenho: usuarios[key].desempenho,
                    etnia: usuarios[key].etnia,
                    internet: usuarios[key].acesso_internet,
                    tipo_escola: usuarios[key].tipo_escola,
                    status: usuarios[key].status
                });
            }
            console.log(usuariosArray)
            setUsuarios(usuariosArray);
        });
    }, []);

    return (
        <div className='table-container'>
            
            <Menu />

            <div className='table-tabs'>
                <span className='tab active'>Estudantes</span>
                <span className='tab'>Professores</span>
                <span className='tab'>Infraestrutura</span>
                <span className='tab'>Contatos</span>
            </div>

            <div className='table-filter'>

                <button className='btn-filter'>
                    <BsFilter className='btn-icon' />
                    <span className='btn-span'>Filtro</span>
                </button>
                <input type="text" className='input-filter' id="filterName" placeholder='Busque pelo dado solicitado.' onChange={search} />
                
                <select className='input-select' id="filterCurso" onChange={search}>
                    <option value="">Curso</option>
                    <option value="Vestibular">Vestibular</option>
                    <option value="Técnico">Técnico</option>
                </select>

                <select className='input-select small' id="filterPeriodo" onChange={search}>
                    <option value="">Periodo</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                </select>

                <div className='table-filters noview' id="filters">
                    <span className='filter-title'>Ordenar por: </span>

                    <div className='filter-option'>
                        <span className='option-label'>Nome</span>
                        <input type="radio" className='option-radio' />
                    </div>

                    <div className='filter-option'>
                        <span className='option-label'>Nascimento</span>
                        <input type="radio" className='option-radio' />
                    </div>

                    <div className='filter-option'>
                        <span className='option-label'>Curso</span>
                        <input type="radio" className='option-radio' />
                    </div>

                    <div className='filter-option'>
                        <span className='option-label'>Periodo</span>
                        <input type="radio" className='option-radio' />
                    </div>

                </div>

            </div>

            <table className='table'>

                <thead className='table-header'>
                    <tr>
                        <td><div className='table-square' /></td>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>Curso</td>
                        <td>Nascimento</td>
                        <td>CEP</td>
                        <td>Telefone</td>
                        <td>Status</td>
                        <td><BsThreeDotsVertical /></td>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {usuarios.map((usuario) => {

                        if (usuario["nome"].toUpperCase().includes(filter["nome"].toUpperCase()) && 
                            usuario["curso"].toUpperCase().includes(filter["curso"].toUpperCase()) && 
                            usuario["periodo"].includes(filter["periodo"])){

                            return (
                                <tr onClick={() => { handleRowClick(usuario) }}>
                                    <td className='square-col'><div className='table-square' /></td>
                                    <td className='id-col'>{usuario["id"]}</td>
                                    <td className='name-col'>
                                        <span className='name'>{usuario["nome"]}</span>
                                        <span className='email'>{usuario["email"]}</span>
                                    </td>
                                    <td className='cpf-col'>{formatCPF(usuario["cpf"])}</td>

                                    <td className='curso-col'>
                                        <span className='curso'>{usuario["curso"]}</span>
                                        <span className='periodo'>{usuario["periodo"]}</span>
                                    </td>

                                    <td className='nascimento-col'>
                                        <div className='nascimento-div'>
                                            <span className='date'>{formatDate(usuario["nascimento"])}</span>
                                            <span className='age'>{calculateAge(usuario["nascimento"])} Anos</span>
                                        </div>
                                    </td>

                                    <td className='cep-col'>
                                        {formatCEP(usuario["cep"])}
                                    </td>

                                    <td className='telefone-col'>
                                        <span className='celular'>{formatCel(usuario["celular"])}</span>
                                        <span className='telefone'></span>
                                    </td>

                                    <td className='status-col'>
                                        <div className='status-div'>
                                            <div className='status-circle' />
                                            <span>Ativo</span>
                                        </div>
                                    </td>

                                    <td className='option-col'>
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                            )

                        }
                    })}
                </tbody>
            </table>

            {selectedData && (
                <Modal
                    base={props.base}
                    id={selectedData.id}
                    name={selectedData.nome}
                    email={selectedData.email}
                    age={selectedData.nascimento}
                    cpf={selectedData.cpf}
                    cep={selectedData.cep}
                    rg={selectedData.rg}
                    genero={selectedData.genero}
                    etnia={selectedData.etnia}
                    numero={selectedData.numero}
                    desempenho={selectedData["desempenho"]}
                    tipo_escola={selectedData.tipo_escola}
                    internet={selectedData.internet}
                    curso={selectedData.curso}
                    sala={selectedData.sala}
                    periodo={selectedData.periodo}
                    celular={selectedData.celular}
                    primeira_opcao={selectedData.primeira_opcao}
                    universidade={selectedData.universidade}
                    status={selectedData.status}
                    onClose={() => setSelectedData(null)}
                />
            )}

        </div>
    )
}

export default Tabela

function Modal(props) {

    function removerUsuario(id) {
        props.base.database().ref('usuarios/' + id).remove()
          .then(() => {
            console.log('Usuário removido com sucesso');
          })
          .catch((error) => {
            console.error('Erro ao remover usuário: ', error);
          });
    }

    function confirmDelete(id){
        if(window.confirm(`Tem certeza que deseja deletar ${id}?` == true)){
            removerUsuario(id);
            window.location.reload();
        } else{
            console.log("Cancelado")
        }
    }

    function editData(id, desempenho, etnia, genero, tipo, internet, curso, periodo, sala, opcao, status){
        let fields = ["name", "email", "cpf", "rg", "cep", "numero", "celular", "universidade"]

        for(let i = 0; i != fields.length; i++){
            let value = document.querySelector(`#modal-${fields[i]}`)
            let input = document.createElement("input");
            input.setAttribute("id", `modal-${fields[i]}`)
            input.classList.add("modal-input");
            input.value = value.innerText;

            value.parentNode.replaceChild(input, value);
        }

        let values = {
            id: id,
            nome: document.querySelector(`#modal-name`),
            email: document.querySelector(`#modal-email`),
            celular: document.querySelector(`#modal-celular`),
            cpf: document.querySelector(`#modal-cpf`),
            rg: document.querySelector(`#modal-rg`),
            cep: document.querySelector(`#modal-cep`),
            numero: document.querySelector(`#modal-numero`),

            desempenho: desempenho,
            etnia: etnia,
            genero: genero,
            tipo_escola: tipo,
            internet: internet,
            curso: curso,
            periodo: periodo,
            sala: sala,
            opcao: opcao,
            status: status
        }
    }

    const [address, setAddress] = useState({});

    useEffect(() => {
      const fetchAddress = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${props.cep}/json/`);
        const data = await response.json();
    
        if (data.erro) {
          throw new Error(`CEP inválido: ${props.cep}`);
        }
    
        setAddress({
          street: data.logradouro,
          neighborhood: data.bairro
        });
      };
    
      fetchAddress();
    }, [props.cep]);

    let disciplinas = props.desempenho
 
    return (
        <div className="modal-overlay">
            <div className='modal-header'>
                <div className='row'>
                    <AiFillDelete className='header-icon' onClick={() => {confirmDelete(props.id)}}/>
                    <AiFillEdit className='header-icon' onClick={() => {editData(props.id, props.desempenho, props.etnia, props.genero, props.tipo, props.internet, props.curso, props.periodo, props.sala, props.primeira_opcao, props.status)}}/>
                </div>


                <button className='btn-close' onClick={props.onClose}>X</button>
            </div>

            <div className='area'>

                <div className='row'>
                    <div className='modal-group big'>
                        <span className='modal-label'>Nome:</span>
                        <span className='modal-value' id='modal-name'>{props.name}</span>
                    </div>

                    <div className='modal-group medium'>
                        <span className='modal-label'>Email:</span>
                        <span className='modal-value' id='modal-email'>{props.email}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>CPF:</span>
                        <span className='modal-value' id='modal-cpf'>{formatCPF(props.cpf)}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>RG:</span>
                        <span className='modal-value' id="modal-rg">{formatRG(props.rg)}</span>
                    </div>
                </div>

                <div className='row'>
                    <div className='modal-group small'>
                        <span className='modal-label'>CEP:</span>
                        <span className='modal-value' id='modal-cep'>{formatCEP(props.cep)}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Rua:</span>
                        <span className='modal-value'>{address.street}</span>
                    </div>

                    <div className='modal-group medium'>
                        <span className='modal-label'>Bairro:</span>
                        <span className='modal-value'>{address.neighborhood}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Nº:</span>
                        <span className='modal-value' id="modal-numero">{props.numero}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Celular:</span>
                        <span className='modal-value' id="modal-celular">{formatCel(props.celular)}</span>
                    </div>
                </div>

                <div className='row'>
                    <div className='modal-group small'>
                        <span className='modal-label'>Etnia:</span>
                        <span className='modal-value' id="modal-etnia">{props.etnia}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Gênero:</span>
                        <span className='modal-value' id="modal-genero">{props.genero}</span>
                    </div>

                    <div className='modal-group medium'>
                        <span className='modal-label'>Tipo Escola:</span>
                        <span className='modal-value' id="modal-tipo">{props.tipo_escola}</span>
                    </div>

                    <div className='modal-group tiny'>
                        <span className='modal-label'>Internet:</span>
                        <span className='modal-value' id="modal-internet">{props.internet}</span>
                    </div>
                </div>

                <div className='row'>
                    <div className='modal-group small'>
                        <span className='modal-label'>Curso:</span>
                        <span className='modal-value' id="modal-curso">{props.curso} - {props.periodo}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Sala:</span>
                        <span className='modal-value' id="modal-sala">{props.sala}</span>
                    </div>

                    <div className='modal-group medium'>
                        <span className='modal-label'>Primeira Opção:</span>
                        <span className='modal-value' id="modal-opcao">{props.primeira_opcao}</span>
                    </div>

                    <div className='modal-group small'>
                        <span className='modal-label'>Universidade:</span>
                        <span className='modal-value' id="modal-universidade">{props.universidade}</span>
                    </div>
                    
                    <div className='modal-group tiny'>
                        <span className='modal-label'>Status:</span>
                        <span className='modal-value' id="modal-status">{props.status}</span>
                    </div>
                </div>

            </div>

            <span className='desempenho-name'>Desempenho</span>
            <div className='desempenhos'>
                <Desempenho name={disciplinas["Matematica"]["Nome"]} nivel={disciplinas["Matematica"]["Nivel"]} simulados={disciplinas["Matematica"]["Nota_simulado"]} herbertech={disciplinas["Matematica"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Biologia"]["Nome"]} nivel={disciplinas["Biologia"]["Nivel"]} simulados={disciplinas["Matematica"]["Nota_simulado"]} herbertech={disciplinas["Biologia"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Fisica"]["Nome"]} nivel={disciplinas["Fisica"]["Nivel"]} simulados={disciplinas["Fisica"]["Nota_simulado"]} herbertech={disciplinas["Matematica"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Quimica"]["Nome"]} nivel={disciplinas["Quimica"]["Nivel"]} simulados={disciplinas["Quimica"]["Nota_simulado"]} herbertech={disciplinas["Matematica"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Português"]["Nome"]} nivel={disciplinas["Português"]["Nivel"]} simulados={disciplinas["Português"]["Nota_simulado"]} herbertech={disciplinas["Português"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Literatura"]["Nome"]} nivel={disciplinas["Literatura"]["Nivel"]} simulados={disciplinas["Literatura"]["Nota_simulado"]} herbertech={disciplinas["Literatura"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Geografia"]["Nome"]} nivel={disciplinas["Geografia"]["Nivel"]} simulados={disciplinas["Português"]["Nota_simulado"]} herbertech={disciplinas["Geografia"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Sociologia"]["Nome"]} nivel={disciplinas["Sociologia"]["Nivel"]} simulados={disciplinas["Sociologia"]["Nota_simulado"]} herbertech={disciplinas["Geografia"]["Nota_herbert"]} />
                <Desempenho name={disciplinas["Filosofia"]["Nome"]} nivel={disciplinas["Filosofia"]["Nivel"]} simulados={disciplinas["Filosofia"]["Nota_simulado"]} herbertech={disciplinas["Geografia"]["Nota_herbert"]} />
            </div>
        </div>

    );
}