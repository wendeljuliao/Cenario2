import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Image from './Images/teste3.jpg'
import Image2 from './Images/teste1.jpg'
import Image3 from './Images/teste2.jpg'
import Card from './Componentes/Card'
import FAQ from './Componentes/Card'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer'
import Popup from './Componentes/Popup';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image}/>
          <Popup title="Lorem Ipsum1" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et."/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image2}/>
          <Popup title="Lorem Ipsum2" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et."/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image3}/>
          <Popup title="Lorem Ipsum3" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et."/>
        </Route>

        <Route path="/faq" component={FAQ} />
        
      </Switch>

      <Footer />
    </Router>
    
  );
}

export default App;
