import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './Componentes/js/Header';
import Footer from './Componentes/js/Footer'


import Github from './Componentes/Pages/js/Github';
import Home from './Componentes/Pages/js/Home'
import FAQ from './Componentes/Pages/js/FAQ'
import Formulario from './Componentes/Pages/js/Formulario';
import EditFormulario from './Componentes/Pages/js/EditFormulario';

import Formulario2 from './Componentes/Pages/js/Formulario2';
import Formulario3 from './Componentes/Pages/js/Formulario3';
import Playlist from './Componentes/Pages/js/Playlist';
import Login from './Componentes/Pages/js/Login';
import Busca from './Componentes/Pages/js/Busca';

function App() {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState({});
  const [isEdit, setIsEdit] = useState(false);



  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (logado != null) {
      setLogin(true)
    }

    if (login == true) {
      setUsuario(JSON.parse(localStorage.getItem('usuarioLogado')));
    } else {
      setUsuario({ nome: null })
    }

    setIsEdit(false)

  }, [login, isEdit])


  return (
    <Router>
      <Header login={login} setLogin={setLogin} nome={usuario.nome} />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/faq" component={FAQ} />

        <Route path="/git" component={Github} />

        <Route path="/cadastro" component={Formulario} />

        <Route path="/edit">
          <EditFormulario isEdit={isEdit} setIsEdit={setIsEdit} />
        </Route>

        <Route path="/playlist/:id" component={Playlist} />


        <Route path="/login" >
          <Login setLogin={setLogin} />
        </Route>

      </Switch>
      <Footer />

    </Router>

  );
}

export default App;
