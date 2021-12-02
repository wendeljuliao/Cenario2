import React, { Component, useEffect } from "react";
import "./../css/Card.css";
import Popup from "./Popup";
import axios from "axios";
import { Redirect } from "react-router";

export default class Card extends Component {



    constructor(props) {
        super(props);
        this.deletePlaylist = this.deletePlaylist.bind()

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            video_valor: "",
            num: props.num,
        }

    }

    deletePlaylist(e, num, isDelete) {
        e.preventDefault()
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

        axios.delete(`http://localhost:3001/users/${usuario._id}/playlists/${num}`)
        .then((res) => {
            console.log(res.data)
            isDelete(true)
            axios.get(`http://localhost:3001/users/${usuario._id}`)
                .then((res) => {
                    localStorage.setItem('usuarioLogado', JSON.stringify(res.data));
                    window.location.reload()

                })

        });


    }

    render() {

        return (
            <div class="line position-relative">
                {this.props.logado ? 
                <a onClick={(e) => this.deletePlaylist(e, this.props.num, this.props.setIsDelete)} className="botaoFecha position-absolute m-3" style={{ top: 0, right: 0 }}><img src="../../../Images/close_icon.png" style={{ width: '30px', height: 'auto' }} /></a>
                    : null}
                <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                    <label class="title-card">{this.props.title}</label>
                    <label class="sub-card">{this.props.sub}</label>
                </div>
            </div>
        )
    }
}