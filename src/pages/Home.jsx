import React from 'react'
import '../styles/home.scss'

// import {AiOutlineNotification} from 'react-icons/ai'
// import {BiMessageRounded} from 'react-icons/bi'
import News from '../components/News/News'
import Today from '../components/Today/Today'
import Hecomend from '../components/Hecomend/Hecomend'
// import Overview from '../components/Overview/Overview'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'

import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook, TbCup } from 'react-icons/tb'
import { GiBlackHoleBolas, GiDinosaurBones, GiLogicGateOr} from 'react-icons/gi'

function Home(props) {

    // let user = props.user

    return (

        <div className='home-container'>

            <div className='home-view'>
            
                <span className='disciplinas-name'>Disciplinas</span>

                <div className='row'>

                    <DisciplinaIcon name="Matemática" icon={<TbMathFunction className='icon-disciplina' color="#ba181b"/>}/>
                    <DisciplinaIcon name="Física" icon={<GiBlackHoleBolas className='icon-disciplina' color="#4EA699"/>}/>
                    <DisciplinaIcon name="Química" icon={<TbAtom className='icon-disciplina' color="#2DD881"/>}/>
                    <DisciplinaIcon name="Biologia" icon={<TbDna2 className='icon-disciplina' color="#6FEDB7"/>}/>
                    <DisciplinaIcon name="História" icon={<GiDinosaurBones className='icon-disciplina' color="#E1A95F"/>}/>
                    <DisciplinaIcon name="Geografia" icon={<TbMap className='icon-disciplina' color="#E6A817"/>}/>
                    <DisciplinaIcon name="Sociologia" icon={<TbSocial className='icon-disciplina' color="#FFBA00"/>}/>
                    <DisciplinaIcon name="Filosofia" icon={<GiLogicGateOr className='icon-disciplina' color="#FFBF00"/>}/>
                    <DisciplinaIcon name="Literatura" icon={<TbBook2 className='icon-disciplina' color="#007FFF"/>}/>
                    <DisciplinaIcon name="Redação" icon={<TbBook className='icon-disciplina' color="#89CFF0"/>}/>
                    <DisciplinaIcon name="Gramática" icon={<TbPencil className='icon-disciplina' color="#318CE7"/>}/>
                    <DisciplinaIcon name="Estudo" icon={<TbCup className='icon-disciplina' color="#DE3163"/>}/>

                </div>

            </div>

            <div className='home-col'>
                
                <News />
                <Today />
                <Hecomend />

            </div>
            
        </div>

    )
}

export default Home

/*

            <div className='home-header'>

                <div className='header-welcome'>
                    <h2 className='home-title'>Olá, {user.nome}</h2>
                    <span>Futuro Cientista da Computação.</span>

                </div>  

                <div className='header-items'>
                    <AiOutlineNotification className='header-icon'/>
                    <BiMessageRounded className='header-icon'/>
                    
                    <div className='avatar'></div>

                </div>

            </div>

            <div className='home-area'>

                <div className='home-left'>

                    <Overview />

                </div>

                <div className='home-right'>
                    <News />
                    <Today />
                    <Hecomend />
                </div>

            </div>


*/