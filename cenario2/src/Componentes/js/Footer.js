import { useState, useEffect } from 'react'

import { Card, Button } from 'react-bootstrap'

import { Link } from "react-router-dom"


var meses = new Array("Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

export default function Footer() {
    const [date, setDate] = useState(new Date());

    return (

        <footer class="bg-dark text-center text-white">
            <div class="container p-4">
                <section class="mb-4">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" height="50px" />
                </section>

                <section class="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>

                <section class="">
                    <div class="row" style={{ justifyContent: 'center' }}>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <h5 class="text-uppercase">Links</h5>
                            <div style={{ width: 'fit-content' }}>
                                <ul class="list-unstyled mb-0" style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                                    <li>
                                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq" style={{ textDecoration: "none", color: "white" }}>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro" style={{ textDecoration: "none", color: "white" }}>Cadastro</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <h5 class="text-uppercase">GITHUB</h5>
                            <div style={{ width: 'fit-content' }}>
                                <ul class="list-unstyled mb-0" style={{alignItems:'flex-start', display: "flex", flexDirection: "column"}}>
                                    <li>
                                        
                                        <a href="https://github.com/GabrielCunha6403" target="_blank" class="text-white"><svg xmlns="http://www.w3.org/2000/svg" color="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> João
                                            Gabriel</a>

                                    </li>
                                    <li>
                                        
                                        <a href="https://github.com/paulo7676" target="_blank" class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Paulo
                                            Ribeiro</a>
                                    </li>
                                    <li>
                   
                                        <a href="https://github.com/wendeljuliao" target="_blank" class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Wendel
                                            Julião</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="text-center p-3" style={{ background: "black" }}>

                <label class="text-white">{date.getDate() + " de " + meses[date.getMonth()] + " de " + date.getFullYear()}</label>
            </div>
        </footer>
    )

}