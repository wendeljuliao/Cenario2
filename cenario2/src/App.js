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
        <Route exact path="/">
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg="url(https://geekblog.com.br/wp-content/uploads/2021/06/Resultado-de-imagen-de-rick-and-morty-wallpaper.jpg)"/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg="url(https://i.pinimg.com/736x/bb/db/67/bbdb679f2d14c90e52667a285da5b582.jpg)"/>
          <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg="url(https://animesonline.com.br/wp-content/uploads/2021/03/rick-and-morty-wallpaper-hd-iphone.jpg)"/>
        </Route>
        <Route path="/faq" component={FAQ} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
