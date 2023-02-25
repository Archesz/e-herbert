import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import View from '../components/View/View';

import '../styles/main.scss'
function Main() {
    
    const [page, setPage] = useState("Home")
    const objetoSerializado = localStorage.getItem("HerbertData");

    // Convertendo string de volta para objeto
    const objeto = JSON.parse(objetoSerializado)[0];

    return (
        <div className='main-container'>
            
            <Navbar setState={setPage} page={page}/>
            <View data={objeto} page={page} setState={setPage}/>

        </div>
    )
}

export default Main