import React from 'react';
import Formulario from './components/Publico/Formulario';
import HomePage from './components/Publico/HomePage';
import ListaViagem from './components/Publico/ListaViagem';
import CriarViagem from './components/Privado/CriarViagem';
import DetalhesViagem from './components/Privado/DetalhesViagem';
import LoginPagina from './components/Privado/LoginPagina'
import Router from './Router/index'

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
