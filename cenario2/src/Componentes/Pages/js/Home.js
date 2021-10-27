import React, { useState, useEffect } from "react";

import axios from 'axios'
import Card from '../../js/Card'

import playlist from "../../../Mocks/playlist";
import { Link } from "react-router-dom";

export default function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    
    const [nomePlaylist, setNomePlaylist] = useState('');
    const [descricaoPlaylist, setDescricaoPlaylist] = useState('');
    const [idPlaylist, setIdPlaylist] = useState('');
    const [imagePlaylist, setImagePlaylist] = useState('');
    const [musicasPlaylist, setMusicasPlaylist] = useState([]);

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))
        if (usuario !== null) {
            setPlaylists(usuario.playlists)
        } else {
            axios.get("http://localhost:3001/playlists")
            .then((res) => setPlaylists(res.data))
        }

    }, [])

    async function cadastrarPlaylist(e) {
        e.preventDefault()

        if (email == confirmarEmail && email.length > 0) {
            let dados = { email, senha, nome, dia, mes, ano, sexo, noticias, termos, playlists: [] }
            users.push(dados)
            console.log(users)
      
            axios.post("http://localhost:3001/users", dados)
              .then(res => console.log(res.data))
              
            setEmail("")
            setConfirmarEmail("")
            setSenha("")
            setNome("")
            setDia("")
            setMes("")
            setAno("")
            setSexo("")
            setNoticias(false)
            setTermos(false)
            cor = '#1ab26b'
            text = 'Cadastro realizado com sucesso!'
      
            //Redirecionar página, porém não precisa no momento
            setRedirect(true)
      
          } else {
      
            cor = 'red'
            text = 'Emails não coincidem!'
      
      
          }
      
          //Mostrar toast
          setVisible(true)
      
          setTimeout(() => {
            setVisible(false)
          }, 2000);
      
    }

    return (
        <div class="escopo-primary">
            <div class="escopo-secundary">
                <div class="container">
                    <div class="row d-grid align-items-center justify-content-center" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 320px)', gridAutoFlow: 'row' }}>

                        {playlists.map((item) => {
                            return (
                                <Link style={{ width: 390 }} to={`/playlist/${item.id}`}><Card key={item.id} title={item.title} sub={item.sub} bgimg={item.imagem} num={item.id} /></Link>
                            )
                        }
                        )}

                        <a href="#" onClick={() => setIsModalVisible(true)} className="d-flex justify-content-center align-items-center" style={{padding: '0 0', margin: '0 10px'}}>
                            
                            {isModalVisible ? (
                                <div class="popup-bg" /*id={"popup" + this.props.id}*/ >
                                    <form class="escopo-popup" onSubmit={(e) => cadastrarPlaylist(e)}>
                                        <a href="#" id="close" onClick={() => setIsModalVisible(false)}/>
                                        <div className="campos w-100 p-5">
                                            <div style={{ width: '100%' }}>
                                                <div className="inputField d-flex align-items-start flex-column py-3">
                                                    <label>Nome da nova Playlist</label>
                                                    <input required type="text" class="bg-transparent border-0" style={{ width: "100%" }} />
                                                </div>
                                                <div className="inputField d-flex align-items-start flex-column py-3">
                                                    <label>Descrição</label>
                                                    <input required type="text" class="bg-transparent border-0" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center align-items-center">
                                            <input type="submit" style={{
                                                backgroundColor: "#1ab26b",
                                                border: "none",
                                                padding: '14px 38px',
                                                borderRadius: "50px",
                                                fontSize: 'medium',
                                                fontWeight: 'bold',
                                                color: 'black',
                                            }}/>
                                        </div>
                                    </form>
                                </div>
                            ) : null}

                            <div className="card-cadastro d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: '#111111'}} viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                            </div>
                        </a>    
                        
                    </div>
                </div>

            </div>
        </div>
    )

}