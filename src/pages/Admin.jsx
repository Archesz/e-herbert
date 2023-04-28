import React from 'react'
import '../styles/admin.scss';
import AdminNav from '../components/AdminNav/AdminNav';
import AdminView from '../components/AdminView/AdminView';

function Admin(props) {
    return (
        <div className="admin-container">
            
            <AdminNav />

            <AdminView page={props.page} base={props.base}/>

        </div>
    )
}

export default Admin