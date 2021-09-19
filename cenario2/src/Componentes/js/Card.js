import React, { Component } from "react";
import "./../css/Card.css";
import Popup from "./Popup";

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.teste = this.teste.bind(this)

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            video_valor: "",
            num: props.num,
        }



    }

    teste() {
        document.getElementById("popup"+this.props.num).style.display = 'flex'
            
    }


    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="line" onClick={this.teste}>
                        <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                            <label class="title-card">{this.props.title + this.props.num}</label>
                            <label class="sub-card">{this.props.sub}</label>
                        </div>
                        <label class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et.</label>
                    </div>
                </div>
                <Popup id={this.state.num} video={this.props.video} title={this.props.title} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et." />

            </div>
        )
    }
}