import React from 'react'
import '../styles/login.scss'

// Contexto 

function Login(props) {


    function login(){

        // Recebendo as entradas
        let user = document.querySelector("#login-user").value
        let password = document.querySelector("#login-password").value   
        // Acessando o banco de dados
        const usuariosRef = props.base.database().ref("usuarios");

        // Buscando conta
        usuariosRef.on("value", (snapshot) => {
            const usuarios = snapshot.val();   
            const data = []
            for(let key in usuarios){
                if(usuarios[key].id === user && usuarios[key].senha === password){
                    data.push(usuarios[key]);
                } 
            }

            localStorage.setItem("HerbertData", JSON.stringify(data));

            window.location.assign("/main")    
        });

    
    }

    return (
        <div className='login-container'>
            
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

export default Login