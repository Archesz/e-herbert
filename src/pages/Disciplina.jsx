import React from 'react'

function Disciplina(props) {

    let disciplina = localStorage.getItem("Disciplina")

    return (
        <div>Disciplina - {disciplina}</div>
    )
}

export default Disciplina