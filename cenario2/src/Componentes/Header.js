import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Header.css'
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <Navbar bg="black" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" height="50px" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "rgb(26 178 107);" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="App.js" style={{ color: "white", fontSize: "20px"}}><Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link></Nav.Link>
                        <Nav.Link href="../faq.js" style={{ color: "white", fontSize: "20px" }}><Link to="/faq" style={{textDecoration: "none", color: "white"}}>Faq</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}