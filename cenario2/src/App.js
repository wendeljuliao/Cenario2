import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './Componentes/js/Header';
import Footer from './Componentes/js/Footer'


import Github from './Componentes/Pages/js/Github';
import Home from './Componentes/Pages/js/Home'
import FAQ from './Componentes/Pages/js/FAQ'
import Formulario from './Componentes/Pages/js/Formulario';
import Formulario2 from './Componentes/Pages/js/Formulario2';
import Formulario3 from './Componentes/Pages/js/Formulario3';
import Playlist from './Componentes/Pages/js/Playlist';
import Login from './Componentes/Pages/js/Login';


function App() {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState({});


  useEffect(() => {
    if (login == true) {
      setUsuario(JSON.parse(localStorage.getItem('usuarioLogado')));
    } else {
      setUsuario({nome: null})
    }
  }, [login])
  

  return (
    <Router>
      <Header login={login} setLogin={setLogin} nome={usuario.nome} />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/faq" component={FAQ} />

        <Route path="/git" component={Github} />

        <Route path="/cadastro" component={Formulario} />

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
