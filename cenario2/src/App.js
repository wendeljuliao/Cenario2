import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Image from './Images/teste3.jpg'
import Image2 from './Images/teste1.jpg'
import Image3 from './Images/teste2.jpg'
import Card from './Componentes/Card'
import FAQ from './Componentes/FAQ'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image}/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image2}/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image3}/>
        </Route>
        <Route path="/faq" component={FAQ} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
