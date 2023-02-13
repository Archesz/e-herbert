import React, { useState } from 'react';

import './News.scss'

let data = [
    {"Nome": "Unicamp libera 2ª chamada do Vestibular 2023 Com cotas indigneas afro e tudo o que mais tem pra ter", "Data": "13/02/2023", "Hora": "11:45"},
    {"Nome": "USP perde a posição para Unicamp como melhor do Brasil (Outra vez)", "Data": "13/02/2023", "Hora": "10:45"},
    {"Nome": "MIT convida João Vitor (Jovi) para palestra sobre realidade aumentada!", "Data": "13/02/2023", "Hora": "12:00"},
]

function News() {
    
    const [value, setValue] = useState(data[0]);

    return (
        <div className='news-container'>
            
            <span className='news-name'>HerbertNews</span>

            <a className='news-title' href="https://vestibular.mundoeducacao.uol.com.br/noticias">{value["Nome"]}</a>


            <div className='news-date'>
                {value["Data"]} - {value["Hora"]}
            </div>

            <div className='news-count'>
                <div className='count active' onClick={() => {setValue(data[0])}}></div>
                <div className='count' onClick={() => {setValue(data[1])}}></div>
                <div className='count' onClick={() => {setValue(data[2])}}></div>
                <div className='count' onClick={() => {setValue(data[3])}}></div>
                <div className='count' onClick={() => {setValue(data[4])}}></div>
            </div>
        </div>
    )
}

export default News