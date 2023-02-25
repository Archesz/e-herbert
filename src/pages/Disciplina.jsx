import React, {useEffect, useState} from 'react'

function Disciplina(props) {

    // let disciplina = localStorage.getItem("Disciplina")
    const [conteudo, setConteudo] = useState()

    useEffect(() => {
        const usuariosRef = props.base.database().ref("disciplinas/matematica");
        usuariosRef.on("value", (snapshot) => {
            let conteudos = snapshot.val();
            let conteudosArray = []
            for (let key in conteudos) {
                conteudosArray.push({key: conteudos[key]})
            }
            setConteudo(conteudosArray)
        });
    }, []);
    
    return (
        <div>
            

            
        </div>
    )
}

export default Disciplina