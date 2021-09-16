import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import "./Card.css";
import Popup from "./Popup";
import video from "../Images/video.mp4"

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.teste = this.teste.bind(this)

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            num: props.num,
        }



    }

    teste() {
        if (this.props.num == "1") {
            document.getElementById("popup1").style.display = 'flex'
            document.getElementById("popup2").style.display = 'none'
            document.getElementById("popup3").style.display = 'none'
        } else if (this.props.num == "2") {
            document.getElementById("popup1").style.display = 'none'
            document.getElementById("popup2").style.display = 'flex'
            document.getElementById("popup3").style.display = 'none'
        } else if (this.props.num == "3") {
            document.getElementById("popup1").style.display = 'none'
            document.getElementById("popup2").style.display = 'none'
            document.getElementById("popup3").style.display = 'flex'
        }
    }


    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="line" onClick={this.teste}>
                        <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                            <video autoPlay muted>
                                <source src={video} type="video/mp4" />
                            </video>
                            <label class="title-card">{this.props.title}</label>
                            <label class="sub-card">{this.props.sub}</label>
                        </div>
                        <label class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et.</label>
                    </div>
                </div>
                <Popup id="1" title={"Lorem Ipsum"} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et." />

            </div>
        )
    }
}