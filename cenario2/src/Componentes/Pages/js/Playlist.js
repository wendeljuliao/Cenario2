import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../css/Playlist.css'

import axios from 'axios'
import { set } from "react-hook-form";


export default function Playlist() {
    const [musicas, setMusicas] = useState([]);

    const { id } = useParams();


    const [logado, setLogado] = useState(false);
    const [isSave, setIsSave] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const [musicaEscolhida, setMusicaEscolhida] = useState({ titulo_musica: "" });

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))


        if (usuario === undefined) {
            axios.get(`http://localhost:3001/playlists/${id}`)
                .then((res) => {
                    setMusicas(res.data.musicas)
                })

            setLogado(false)
        } else {
            axios.get(`http://localhost:3001/users/${usuario._id}/playlists/${id}`)
                .then((res) => setMusicas(res.data.musicas))

            setLogado(true)
        }

        setIsSave(false)
        setIsDelete(false)

    }, [isDelete, isSave])


    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        console.log(L)
        for (i = L; i >= 0; i--) {
            selectElement.removeChild(selectElement.childNodes[0]);
        }

    }


    function setBusca(e) {

        axios.get("http://localhost:3001/musicas")
            .then((res) => {
                var list = document.getElementById('musicas_procuradas');

                //apaga todas as musicas no dropdown
                removeOptions(document.getElementById('musicas_procuradas'));


                for (let i in res.data) {

                    var cantor = res.data[i]["Cantor"].toLowerCase();
                    var titulo = res.data[i]["titulo_musica"].toLowerCase();

                    var string_atual = e.toLowerCase();
                    var option = document.createElement('option')

                    if (cantor.includes(string_atual) == true || titulo.includes(string_atual) == true) {
                        option.value = titulo;
                        option.label = cantor;

                        list.appendChild(option);

                        setMusicaEscolhida(res.data[i]);

                    }
                }

                if (res.data.length == 1) {
                    console.log(res.data);
                }

            })


        setTimeout(() => {
            console.log(musicaEscolhida)
        }, 2000)

    }

    function salvarMusica(e) {
        e.preventDefault();
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

        axios.post(`http://localhost:3001/users/${usuario._id}/playlists/${id}/musicas`, musicaEscolhida)
            .then((res) => {
                console.log(res.data)
                usuario.playlists.find((p) => p.id === parseInt(id)).musicas.push(musicaEscolhida)
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                setIsSave(true)


            });

    }

    function deleteMusic(e, num) {
        e.preventDefault()
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

        axios.delete(`http://localhost:3001/users/${usuario._id}/playlists/${id}/musicas/${num}`)
            .then((res) => {
                console.log(res.data)
                setIsDelete(true)
                axios.get(`http://localhost:3001/users/${usuario._id}`)
                    .then((res) => {
                        localStorage.setItem('usuarioLogado', JSON.stringify(res.data));
                        window.location.reload()

                    })

            });



    }

    return (
        <div class="escopo-primary">
            <div class="escopo-secundary p-3">
                {musicas.map((element) => {
                    return (
                        <div className="playlist-line d-flex align-items-center justify-content-center w-100 m-3">
                            <img src={element.imagem} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: 10, borderRadius: 10 }} />
                            <div className="d-flex align-items-center justify-content-center flex-row m-2" style={{ width: "80%" }}>
                                <div className="w-100">
                                    <label style={{ width: "600px" }}>{element.titulo_musica}</label>
                                    <audio controls className="w-100"> <source src={element.musica} type="audio/mp3"></source></audio>
                                </div>
                                {logado ?
                                    <a onClick={(e) => deleteMusic(e, element.id_musica)}><img src="/Images/close_icon.png" style={{ width: '30px', height: 'auto' }} /></a>
                                    : null}
                            </div>
                        </div>

                    )
                })}

                {logado ?
                    <div className="playlist-line d-flex align-items-center justify-content-center w-100 m-3">
                        <div className="d-flex align-items-center justify-content-center flex-row m-2" style={{ width: "80%" }}>
                            <input style={{ float: "right", display: "absolute", color: 'black' }}
                                type="text" name="product" list="musicas_procuradas"
                                onChange={(e) => {
                                    setBusca(e.target.value)
                                }} />
                            <datalist id="musicas_procuradas"></datalist>
                            <a onClick={(e) => salvarMusica(e)}><svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" style={{ fill: '#2e2e2e' }} viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                            </a>
                        </div>
                    </div>
                    : null}

            </div>
        </div>
    )

}