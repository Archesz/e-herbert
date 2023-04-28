import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'

import firebase from "firebase/compat/app";
import "firebase/compat/database";

import Menu from './components/Menu/Menu';
import Formulario2 from './components/Formulario/Formulario2';
import Tabela from './components/Tabela/Tabela';

import Login from './pages/Login';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main';
import Disciplina from './pages/Disciplina';
import Admin from './pages/Admin';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login base={firebase}/>
  },
  {
    path: "/plataforma",
    element: <Menu />
  },
  {
    path: "/admin",
    element: <Admin base={firebase} page="cadastrarMateria"/>
  },
  {
    path: "Questoes",
    element: <Admin base={firebase} page="cadastrarQuestoes"/>
  },
  {
    path: "/formulario",
    element: <Formulario2 base={firebase}/>
  },
  {
    path: "/tabela",
    element: <Tabela base={firebase}/>
  },
  {
    path: "/main",
    element: <Main base={firebase}/>
  },
  {
    path: "/disciplina",
    element: <Disciplina base={firebase}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
