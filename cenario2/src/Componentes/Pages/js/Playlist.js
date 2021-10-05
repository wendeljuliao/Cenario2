import React from "react";
import { useParams } from "react-router";

import playlists from "../../../Mocks/playlist";

export default function Playlist() {
    const { id } = useParams();
    console.log(id)
    const playlist = playlists.find((p) => p.id == id)
    return (
        <div class="escopo-primary">
            <div class="escopo-secundary">
                {playlist.musicas.map((element) => {
                    return (
                        <audio controls> <source src={element.video}></source></audio>
                    )
                })}

            </div>
        </div>
    )

}