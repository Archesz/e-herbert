import React, { useState, useEffect } from 'react'
import './Tabela.scss'

import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs'

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
    const [filter, setFilter] = useState("")

    function search(){
        let value = document.querySelector("#filter").value;
        console.log(value)
        setFilter(value);
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
                    celular: usuarios[key].celular,
                    telefone: usuarios[key].telefone,
                    desempenho: usuarios[key].desempenho
                });
            }
            console.log(usuariosArray)
            setUsuarios(usuariosArray);
        });
    }, []);

    return (
        <div className='table-container'>

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
                <input type="text" className='input-filter' id="filter" placeholder='Busque pelo dado solicitado.' onChange={search}/>

                <div className='table-filters noview' id="filters">
                    <span className='filter-title'>Ordenar por: </span>

                    <div className='filter-option'>
                        <span className='option-label'>Nome</span>
                        <input type="radio" className='option-radio'/>
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
                        
                        if(usuario["nome"].toUpperCase().includes(filter.toUpperCase())){

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
    
                                    <td className='option-col' id={usuario["id"]}><BsThreeDotsVertical /></td>
                                </tr>
                            )
                            
                        }
                    })}
                </tbody>
            </table>

            {selectedData && (
                <Modal
                    name={selectedData.nome}
                    age={selectedData.nascimento}
                    cpf={selectedData.cpf}
                    onClose={() => setSelectedData(null)}
                />
            )}

        </div>
    )
}

export default Tabela

function Modal({ name, age, cpf, onClose }) {
    return (
        <div className="modal-overlay">
            <h2>Informações da pessoa</h2>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>CPF: {cpf}</p>

            <span>Desempenho</span>
            <span>Matemática: </span>
            <button onClick={onClose}>Fechar</button>
        </div>
        
    );
}