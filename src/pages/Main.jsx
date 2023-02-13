import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import View from '../components/View/View';

import '../styles/main.scss'
function Main() {

    const objetoSerializado = localStorage.getItem("HerbertData");

    // Convertendo string de volta para objeto
    const objeto = JSON.parse(objetoSerializado)[0];
    console.log(objeto)
    return (
        <div className='main-container'>
            
            <Navbar />

            <View data={objeto} page="Home"/>

        </div>
    )
}

export default Main