import React, { useState } from 'react';
import { useHistory } from 'react-router';

import axios from 'axios';

export default function Busca(props) {

    function setBusca(e) {
        //depois resolver pra ele sempre abrir a porta certa
        axios.get("http://localhost:3003/musicas")
            .then((res) => {
                for (let i in res.data){
                    var cantor = res.data[i]["Cantor"].toLowerCase();
                    var titulo = res.data[i]["titulo_musica"].toLowerCase();
                    var string_atual = e.toLowerCase();
                    if(cantor.includes(string_atual) == true || titulo.includes(string_atual) == true && string_atual){
                        console.log(cantor)
                        console.log(titulo)
                        console.log("-------------------")
                    }
                }
            })
    }

    return (
        <div className="escopo-primary">
            <div className='ins' className="escopo-secundary">
                <form style={{ width: "40%", textAlign: "center", margin: "20%" }}>

                    <div className="inputField d-flex align-items-start flex-column">
                        <label>Realize a busca</label>
                        <input required type="text" class="bg-transparent border-0"
                            onChange={(e) => setBusca(e.target.value)}  style={{ width: "100%" }} />
                    </div>

                    <input type="submit" style={{ margin: 20 }} value="Entrar" class="inscrevase" />

                </form>
            </div>

        </div>

    )
}