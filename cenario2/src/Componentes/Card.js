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
                        <div class="body">
                            <label class="title-card">{this.props.title}</label>
                            <label class="sub-card">{this.props.sub}</label>
                        </div>            
                    </div>
                </div>
            </div>

        )
    }
}