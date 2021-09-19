import './../css/Pergunta.css'
import React, { Component } from "react";


export default class Pergunta extends Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this)

        this.state = {
            title_valor: "",
            sub_valor: "",
        }


    }

    click() {
        var arrow = document.getElementById("arrow"+this.props.id)
        var elemento = document.getElementById("itens-faq"+this.props.id)
        if (elemento.style.height == ""){
            arrow.style = "transform: rotate(180deg);"
            elemento.style = "padding: 10px 30px !important; height: auto;";
        }else{
            arrow.style = "transform: rotate(0deg);"
            elemento.style = "height: 0;"
            elemento.style = "padding: 0;";
        }
    }

    render() {
        return (
            <div class="faq">    
                <li onClick= {this.click}>
                    <a class="assunto-faq1" href="javascript://">{this.props.title}<svg id={"arrow"+this.props.id} xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg></a>
                    <ul class="itens-faq" id={"itens-faq"+this.props.id}>
                        <label>{this.props.sub}</label>
                    </ul>
                </li>
            </div>
        )
    }

}
