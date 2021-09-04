import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Card from './Componentes/Card'

function App() {
  return (
    <div className="App">
      <Navbar bg="black" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="escopo-primary">
        <div class="escopo-secundary">
          <div class="line">
            <Card title="Relou" sub="reloureçpirelou" bgimg="../Images/teste.jpg"/>
            <div>
              <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dui eleifend, pharetra elit in, ullamcorper tortor. Phasellus vulputate nisi vel leo placerat, ac convallis magna lobortis. Suspendisse lacinia condimentum vehicula. </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
