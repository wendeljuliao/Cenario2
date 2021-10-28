import React, { Component } from "react";
import "./../css/Card.css";
import Popup from "./Popup";
import axios from "axios";

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

    deletePlaylist(){

        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

        axios.get(`http://localhost:3001/playlists/${usuario}`)
        .then(res => console.log(res.data))

    }

    render() {
        return (
            <div class="line position-relative">
                <a href="#" onClick={this.deletePlaylist} className="botaoFecha position-absolute m-3" style={{top: 0, right: 0}}><img src="../../../Images/close_icon.png" style={{width: '30px', height: 'auto'}}/></a>
                <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                    <label class="title-card">{this.props.title}</label>
                    <label class="sub-card">{this.props.sub}</label>
                </div>
            </div>
        )
    }
}