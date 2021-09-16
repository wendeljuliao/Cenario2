import './Faq.css'
import React, { Component } from "react";


export default class FAQ extends Component {
    
    click() {
        var elemento = document.getElementById("ites-faq1")   
        if(elemento.style.display == "flex")
            elemento.style = "display: none;";
        else
            elemento.style = "display: flex;"
    }

    render() {
        return (
            <div class="escopo-primary">    
                <div class="escopo-secundary">
                    <div class="logo-faq">
                    <img src="https://images.emojiterra.com/twitter/512px/1f9d0.png"/>
                    <label class="title1">Como podemos ajudar?</label>
                    <label class="title2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.</label>
                </div>
                    <nav class="lista-faq">
                    <ul>
                        <li onClick= {this.click}>
                            <a class="assunto-faq1" href="javascript://">Dúvidas frequentes sobre o COVID-19<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq1" id="ites-faq1">
                                <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ultrices orci, eu fringilla risus. Quisque iaculis luctus accumsan. Fusce cursus eu nulla sollicitudin rhoncus. Duis nec urna lorem. Nulla facilisi. Quisque non ipsum laoreet, mollis diam ut, ornare velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                            </ul>
                        </li>
                        <li>
                            <a class="assunto-faq2" href="javascript://">Dúvidas frequentes sobre as músicas tocadas<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq2">
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="assunto-faq3" href="javascript://">Dúvidas frequentes sobre nós<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq3">
                                <li><a class="pergunta-faq" href="#">Como surgiu a empresa?</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="assunto-faq4" href="javascript://">Dúvidas frequentes sobre fulano<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq4">
                                <li><a class="pergunta-faq" href="#">Como surgiu a empresa?</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="assunto-faq5" href="javascript://">Dúvidas frequentes sobre sicrano<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq5">
                                <li><a class="pergunta-faq" href="#">Como surgiu a empresa?</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="assunto-faq6" href="javascript://">Dúvidas frequentes sobre beltrano<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                            <ul class="itens-faq6">
                                <li><a class="pergunta-faq" href="#">Como surgiu a empresa?</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                                <li><a class="pergunta-faq" href="#">Lorem Ipsum dolor sit amet</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
    
}
