import React, { useState, useEffect } from 'react';


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './../css/Header.css'
import { Link } from "react-router-dom"

import axios from 'axios';

export default function Header(props) {

    //funcao de remover as opcoes do dropdown
    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        console.log(L)
        for(i = L; i >= 0; i--) {
            selectElement.removeChild(selectElement.childNodes[0]);
        }

    }
     

    function setBusca(e) {

        axios.get("http://localhost:3001/musicas")
            .then((res) => {
                var list = document.getElementById('musicas_procuradas');

                //apaga todas as musicas no dropdown
                removeOptions(document.getElementById('musicas_procuradas'));

                for (let i in res.data){

                    var cantor = res.data[i]["Cantor"].toLowerCase();
                    var titulo = res.data[i]["titulo_musica"].toLowerCase();

                    var string_atual = e.toLowerCase();
                    var option = document.createElement('option')

                    if(cantor.includes(string_atual) == true || titulo.includes(string_atual) == true){
                        option.value = titulo;
                        option.label = cantor;

                        list.appendChild(option);
                    }
                }
            })
            
    }

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
                    <Nav className="me-auto" style={{ width: "100%", position: "relative" }}>

                        <Nav.Link style={{ color: "white", fontSize: "20px" }}><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: "20px" }}><Link to="/faq" style={{ textDecoration: "none", color: "white" }}>FAQ</Link></Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: "20px" }}><Link to="/git" style={{ textDecoration: "none", color: "white" }}>Github</Link></Nav.Link>
                        {props.login == false ? <Nav.Link style={{ color: "white", fontSize: "20px" }}><Link to="/cadastro" style={{ textDecoration: "none", color: "white" }}>Formulario</Link></Nav.Link> : <></>}
                        <Nav.Link style={{ color: "white", fontSize: "20px" }}>
                            {props.login == false ? (

                                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link>
                            ) : (
                                <Link onClick={() => {
                                    localStorage.removeItem("usuarioLogado")
                                    props.setLogin(false)
                                }} to="/login" style={{ textDecoration: "none", color: "white" }} >Logout</Link>
                                    
                            )}
                        {/*<input style={{ float: "right", display: "absolute",color:'black'}} 
                        type="text" name="product" list="musicas_procuradas"
                        onChange={(e) => setBusca(e.target.value)}/>
                            <datalist id="musicas_procuradas"></datalist>*/}
                        
                        </Nav.Link>
                        {props.nome != null ? <Nav.Link style={{ color: "white", fontSize: "20px", position: "absolute", right: 0 }}><Link to="/edit" style={{ textDecoration: "none", color: "white" }}>{props.nome}</Link></Nav.Link> : <></>}



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}