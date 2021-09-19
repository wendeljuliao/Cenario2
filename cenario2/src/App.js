import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './Componentes/js/Header';
import Footer from './Componentes/js/Footer'


import Github from './Componentes/Pages/js/Github';
import Home from './Componentes/Pages/js/Home'
import FAQ from './Componentes/Pages/js/FAQ'
import Formulario from './Componentes/Pages/js/Formulario';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/faq" component={FAQ} />

        <Route path="/git" component={Github} />

        <Route path="/cadastro" component={Formulario} />

      </Switch>

      <Footer />
      
    </Router>
    
  );
}

export default App;
