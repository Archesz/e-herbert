import React, {useState} from 'react'
import './Hecomend.scss'

import {FaListAlt} from 'react-icons/fa'
import {AiOutlineYoutube, AiOutlineBook} from 'react-icons/ai'

const recomendacoes = [
    {"Nome": "Estudo", "Descrição": "Reparamos que você não está apresentando boas notas em disciplinas de Matemática, Física e Química. Recomendamos os estudos dos assuntos: Frações, Movimento retilineo uniforme e tabela periódica.", "Icone": <AiOutlineBook className='icone'/>, "Links": ["teste"]},
    {"Nome": "Lista", "Descrição": "Separamos algumas listas de exercícios para você fazer: ", "Icone": <FaListAlt className='icone'/>, "Links": ["teste",]},
    {"Nome": "Vídeo", "Descrição": "Alguns vídeos recomendados para você assistir hoje: ", "Icone": <AiOutlineYoutube className='icone'/>, "Links": ["teste",]},
]

function Hecomend() {

    const [selectTips, setSelectTips] = useState(null)

    return (
        <div className='hecomend-container'>
            <span className='hecomend-name'>Hecomend (Para você)</span>
            <span className='hecomend-sub'>Confira as recomendações que nossa inteligência tem para você: </span>

            <div className='recomendacoes'>

                {recomendacoes.map((recomendacao) => {
                    return(
                        <div className='recomendacao' onClick={() => {setSelectTips(recomendacao)}}> 
                            
                            {recomendacao["Icone"]}
                            <span className='recomendacao-name'>{recomendacao["Nome"]}</span>

                            
                        </div>
                    )
                })}

            </div>
            
            {selectTips && (
                <ModalTips 
                onClose={() => setSelectTips(null)}
                name={selectTips["Nome"]}
                descricao={selectTips["Descrição"]}
                links={selectTips["Links"]}
                />
            )}

        </div>
    )
}

export default Hecomend

function ModalTips(props) {
 
    return (
        <div className="modalTips-overlay" onClick={props.onClose}>

            <div className='modalTips'>

                <span className='tip-name'>{props.name}</span>
                <span className='tip'>{props.descricao}</span>

                <div className='links'>

                    {props.links.map((link) => {
                        return(
                            <span>{link}</span>
                        )
                    })}

                </div>

            </div>

        </div>

    );
}