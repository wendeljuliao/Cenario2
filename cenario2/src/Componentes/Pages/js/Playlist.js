import React from "react";
import { useParams } from "react-router";
import '../css/Playlist.css'

import playlists from "../../../Mocks/playlist";


export default function Playlist() {
    const { id } = useParams();
    console.log(id)
    const playlist = playlists.find((p) => p.id == id)
    return (
        <div class="escopo-primary">
            <div class="escopo-secundary p-3">
                {playlist.musicas.map((element) => {
                    return (
                        <div className="playlist-line d-flex w-100 m-3">
                            <img src={element.bgimg} style={{width:"100px", height:"100px", objectFit:"cover", marginRight: 10, borderRadius: 10}} />
                            <div className="d-flex align-items-start justify-content-center flex-column m-2" style={{width: "80%"}}>
                                <label>{element.video}</label>
                                <audio controls className="w-100"> <source src={element.video} type="audio/ogg"></source></audio>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}