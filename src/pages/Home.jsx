import React, { useContext, useEffect, useState} from 'react'
import '../styles/home.scss'

// Contexto 

function acess(){
    let user = document.querySelector("#login-user").value
    let password = document.querySelector("#login-password").value    

    if(user == "Herbertech" && password == "admherbert"){
        window.location.assign('/plataforma')
    } else{
        alert("Login ou Senhas incorretas.")
    }
}

function Home(props) {

    const [data, setData] = useState({})

    function login(){

        // Recebendo as entradas
        let user = document.querySelector("#login-user").value
        let password = document.querySelector("#login-password").value   
        let flag = 0;
        // Acessando o banco de dados
        const usuariosRef = props.base.database().ref("usuarios");

        // Buscando conta
        usuariosRef.on("value", (snapshot) => {
            const usuarios = snapshot.val();   
            const data = []
            for(let key in usuarios){
                if(usuarios[key].id == user && usuarios[key].senha == password){
                    data.push(usuarios[key]);
                    flag = 1;
                } 
            }
            setData(data);
        });

        if(flag == 0){
            alert("Conta não encontrada.")
        } else if(flag == 1){            
            localStorage.setItem("HerbertData", JSON.stringify(data));

            window.location.assign("/main")
        }


    }

    return (
        <div className='home-container'>
            
            <div className='form-login'>

                <span className='form-title'>Login</span>
                
                <div className='form-inputs'>
                    <input placeholder='Username' type="text" className='input' id="login-user"/>
                    <input placeholder='Senha' type="password" className='input' id="login-password"/>
                </div>

                <button className='btn-login' onClick={login}>Acessar</button>

            </div>

        </div>
    )
}

export default Home