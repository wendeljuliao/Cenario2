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
                        <div className="playlist-line d-flex align-items-center justify-content-center w-100 m-3">
                            <img src={element.bgimg} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: 10, borderRadius: 10 }} />
                            <div className="d-flex align-items-center justify-content-center flex-row m-2" style={{ width: "80%" }}>
                                <div className="w-100">    
                                    <label>{element.video}</label>
                                    <audio controls className="w-100"> <source src={element.video} type="audio/mp3"></source></audio>
                                    {console.log(element)}
                                </div>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" style={{fill: '#2e2e2e'}} viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                            </a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}