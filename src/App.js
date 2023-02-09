import Formulario from './components/Formulario/Formulario2';
// import Tabela from './components/Tabela/Tabela';

import './styles/global.scss'

// Conexão com Firebase:

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Tabela from './components/Tabela/Tabela';
import Menu from './components/Menu/Menu';
import Formulario2 from './components/Formulario/Formulario2';


const firebaseConfig = {
  apiKey: "AIzaSyDZc7R_-lLK9xKfa4_610JI7Izk4b831Xc",
  authDomain: "crudherbert.firebaseapp.com",
  databaseURL: "https://crudherbert-default-rtdb.firebaseio.com",
  projectId: "crudherbert",
  storageBucket: "crudherbert.appspot.com",
  messagingSenderId: "382234945560",
  appId: "1:382234945560:web:e0e3b7df6c372bc513fb6d",
  measurementId: "G-RBB092Q5HF"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="container">
        
        <Formulario2 />
        <Tabela base={firebase}/>

    </div>
  );
}

export default App;
