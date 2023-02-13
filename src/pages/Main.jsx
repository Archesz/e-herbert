import React from 'react'

function Main() {

    const objetoSerializado = localStorage.getItem("HerbertData");

    // Convertendo string de volta para objeto
    const objeto = JSON.parse(objetoSerializado)[0];
    console.log(objeto)
    return (
        <div>
            <span>{objeto.nome}</span>
        </div>
    )
}

export default Main