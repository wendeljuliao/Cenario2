import React, { useState, useEffect } from "react";

import axios from 'axios'
import Card from '../../js/Card'

import playlist from "../../../Mocks/playlist";
import { Link } from "react-router-dom";

export default function Home() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/users/0")
        .then(res => {
            console.log(res.data.playlists)
            setPlaylists(res.data.playlists)
        })

    }, [])


    return (
        <div class="escopo-primary"> 
            <div class="escopo-secundary">
                <div class="container">
                    <div class="row d-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 320px)', gridAutoFlow: 'row' }}>

                        {playlists.map((item) => {
                            return (
                                <Link style={{ width: 390 }} to={`/playlist/${item.id}`}><Card key={item.id} title={item.title} sub={item.sub} bgimg={item.imagem} num={item.id} /></Link>
                            )
                        }
                        )}
                    </div>
                </div>

            </div>
        </div>
    )

}