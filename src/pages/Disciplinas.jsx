import React from 'react'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import '../styles/disciplinas.scss'

// Icons
import { TbMathSymbols } from 'react-icons/tb'
import { BiDna, BiAtom, BiWorld } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { RiEnglishInput } from 'react-icons/ri'
import { SlChemistry } from 'react-icons/sl'
import { SiFossilscm } from 'react-icons/si'
import { GiOwl, GiBookshelf } from 'react-icons/gi'
import { MdGroups } from 'react-icons/md'

function Disciplinas(props) {

    function changeDisciplina(disciplina){
        props.setState("Disciplina")
        localStorage.setItem("Disciplina", disciplina)
    }

    return (
        <div className='disciplinas-container'>

            <span className='disciplinas-title'>Disciplinas</span>

            <div className='disciplinas'>
                
                <span className='disciplinas-name'>Exatas</span>
                <div className='row'>
                    <DisciplinaIcon name="Matemática" icon={<TbMathSymbols className='icon-disciplina'/>} onClick={() => {changeDisciplina("Matemática")}}/>
                </div>

                <span className='disciplinas-name'>Natureza</span>
                <div className='row'>
                    <DisciplinaIcon name="Física" icon={<BiAtom className="icon-disciplina"/>} onClick={() => {changeDisciplina("Física")}}/>
                    <DisciplinaIcon name="Química" icon={<SlChemistry className='icon-disciplina'/>} onClick={() => {changeDisciplina("Química")}}/>
                    <DisciplinaIcon name="Biologia" icon={<BiDna className='icon-disciplina'/>} onClick={() => {changeDisciplina("Biologia")}}/>
                </div>
                
                <span className='disciplinas-name'>Humanas</span>
                <div className='row'>
                    <DisciplinaIcon name="História" icon={<SiFossilscm className='icon-disciplina'/>}  onClick={() => {changeDisciplina("História")}}/>
                    <DisciplinaIcon name="Geografia" icon={<BiWorld className="icon-disciplina"/>}  onClick={() => {changeDisciplina("Geografia")}}/>
                    <DisciplinaIcon name="Filosofia" icon={<GiOwl className="icon-disciplina"/>}  onClick={() => {changeDisciplina("Filosofia")}}/>
                    <DisciplinaIcon name="Sociologia" icon={<MdGroups className="icon-disciplina"/>}  onClick={() => {changeDisciplina("Sociologia")}}/>
                </div>

                <span className='disciplinas-name'>Linguagens</span>
                <div className='row'>
                    <DisciplinaIcon name="Literatura" icon={<GiBookshelf className="icon-disciplina"/>} onClick={() => {changeDisciplina("Literatura")}}/>
                    <DisciplinaIcon name="Gramática" icon={<BsPencil className="icon-disciplina"/>} onClick={() => {changeDisciplina("Gramática")}}/>
                    <DisciplinaIcon name="Redação" icon={<TfiWrite className="icon-disciplina"/>} onClick={() => {changeDisciplina("Redação")}}/>
                    <DisciplinaIcon name="Inglês" icon={<RiEnglishInput className="icon-disciplina"/>} onClick={() => {changeDisciplina("Inglês")}}/>
                </div>

            </div>

        </div>
    )
}

export default Disciplinas