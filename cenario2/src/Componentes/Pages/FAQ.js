import './Faq.css'
import React, { Component } from "react";
import Pergunta from '../Pergunta';

export default class FAQ extends Component {

    click() {
        var elemento = document.getElementById("ites-faq1")
        if (elemento.style.display == "flex")
            elemento.style = "display: none;";
        else
            elemento.style = "display: flex;"
    }

    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="logo-faq">
                        <img src="https://images.emojiterra.com/twitter/512px/1f9d0.png" />
                        <label class="title1">Como podemos ajudar?</label>
                        <label class="title2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.</label>
                    </div>
                    <nav class="lista-faq">
                        <Pergunta id="1" title="O Covid-19 atrapalhou algo na empresa?" descricao="Ipsum has been the industry's standard dummy text ever since the 1500s, when an" />
                        <Pergunta id="2" title="As músicas tocadas podem ser ouvidas a qualquer momento?" descricao="It has survived not only five centuries, but also the leap into electronic" />
                    </nav>
                </div>
            </div>
        )
    }

}
