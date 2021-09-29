import React, { Component } from "react";
import "./../css/Card.css";
import Popup from "./Popup";

export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            video_valor: "",
            num: props.num,
        }

    }

    render() {
        return (
            <div class="line" style={{width: "30%"}}>
                <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                    <label class="title-card">{this.props.title + this.props.num}</label>
                    <label class="sub-card">{this.props.sub}</label>
                </div>
            </div>
        )
    }
}