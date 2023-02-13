import React from 'react'
import './View.scss'

import Home from '../../pages/Home'

function View(props) {
    let user = props.data

    if(props.page === "Home"){
        
        return (
            <Home user={user}/>
        )
    
    }
}

export default View