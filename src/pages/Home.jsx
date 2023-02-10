import React from 'react'
import '../styles/home.scss'

function acess(){
    let user = document.querySelector("#login-user").value
    let password = document.querySelector("#login-password").value    

    if(user == "Herbertech" && password == "admherbert"){
        window.location.assign('/plataforma')
    } else{
        alert("Login ou Senhas incorretas.")
    }
}

function Home() {
    return (
        <div className='home-container'>
            
            <div className='form-login'>

                <span className='form-title'>Login</span>
                
                <div className='form-inputs'>
                    <input placeholder='Username' type="text" className='input' id="login-user"/>
                    <input placeholder='Senha' type="password" className='input' id="login-password"/>
                </div>

                <button className='btn-login' onClick={acess}>Acessar</button>

            </div>

        </div>
    )
}

export default Home