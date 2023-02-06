import React from 'react'
import './Tabela.scss'

/*
            {usuarios.map((usuario) => {
                return(usuario["nome"])
            })}
*/

function Tabela() {
    return (
        <div className='table-container'>
            
            <div className='table-filter'>
                
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>RG</td>
                        <td>Email</td>
                        <td>CEP</td>
                        <td>Nº</td>
                        <td>Curso</td>
                        <td>Periodo</td>
                        <td>Celular</td>
                        <td>Telefone</td>
                        <td>Desempenho</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>
                    <tr>Teste</tr>

                </tbody>
            </table>

        </div>
    )
}

export default Tabela