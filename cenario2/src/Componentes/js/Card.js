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


        for (let i = 0; i < usuario.playlists.length; i++) {
            if (usuario.playlists[i].id === num) {
                usuario.playlists.splice(i, 1)
                break
            }
        }


        localStorage.setItem('usuarioLogado', JSON.stringify(usuario))

        console.log("...")
        axios.put(`http://localhost:3001/users/${usuario.id}`, usuario)
            .then((res) => { console.log(res.data) })
        console.log("...")

        isDelete(true)

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