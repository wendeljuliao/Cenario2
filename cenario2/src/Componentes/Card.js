import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import "./Card.css";

export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
        }

    }

    
    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="line">
                        <div class="body" style={{backgroundImage: `url(${this.props.bgimg})`}}>
                            <label class="title-card">{this.props.title}</label>
                            <label class="sub-card">{this.props.sub}</label>
                        </div>
                        <label class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et.</label>
                    </div>
                </div>
            </div>

        )
    }
}