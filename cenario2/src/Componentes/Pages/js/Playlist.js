import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../css/Playlist.css'

import axios from 'axios'
import playlists from "../../../Mocks/playlist";


export default function Playlist() {
    const [musicas, setMusicas] = useState([]);

    const { id } = useParams();
    //const playlist = playlists.find((p) => p.id == id)

    useEffect(() => {

        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))
        if (usuario !== null) {
            setMusicas(usuario.playlists[id].musicas)
        } else {
            axios.get("http://localhost:3001/playlists")
            .then((res) => setMusicas(res.data[id].musicas))
        }
        


    }, [])

    return (
        <div class="escopo-primary">
            <div class="escopo-secundary p-3">
                {musicas.map((element) => {
                    return (
                        <div className="playlist-line d-flex w-100 m-3">
                            <img src={element.bgimg} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: 10, borderRadius: 10 }} />
                            <div className="d-flex align-items-start justify-content-center flex-column m-2" style={{ width: "80%" }}>
                                <label>{element.video}</label>
                                <audio controls className="w-100"> <source src={element.video} type="audio/mp3"></source></audio>
                                {console.log(element)}

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}