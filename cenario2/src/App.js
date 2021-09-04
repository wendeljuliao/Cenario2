import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Card from './Componentes/Card'
import FAQ from './Componentes/FAQ'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Card} />
        <Route path="/faq" component={FAQ} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
