import { useState, useEffect } from 'react'

import { Card, Button } from 'react-bootstrap'

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
                    <div class="row" style={{ justifyContent: 'center'}}>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <h5 class="text-uppercase">Links</h5>
                            <div style={{width:'fit-content'}}>
                                <ul class="list-unstyled mb-0" style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column'}}>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Home</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <h5 class="text-uppercase">Links</h5>
                            <div style={{width:'fit-content'}}>
                                <ul class="list-unstyled mb-0" style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column'}}>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white" style={{textDecoration: 'none'}}>Link 4</a>
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