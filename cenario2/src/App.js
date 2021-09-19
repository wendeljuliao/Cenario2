import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './Componentes/Header';
import Footer from './Componentes/Footer'


import Github from './Componentes/Pages/Github';
import Home from './Componentes/Pages/Home'
import FAQ from './Componentes/Pages/FAQ'
import Formulario from './Componentes/Pages/Formulario';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/faq" component={FAQ} />

        <Route path="/git" component={Github} />

        <Route path="/Cadastro" component={Formulario} />

      </Switch>

      <Footer />
    </Router>
    
  );
}

export default App;
