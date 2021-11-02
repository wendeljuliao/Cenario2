import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';

import axios from 'axios'

import Title from '../../Componentes_Forms/Title';
import '../../../App.css'
import '../css/Formulario.css'
import Toast from '../../js/Toast'


var cor;
var text;

function EditFormulario() {
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [sexo, setSexo] = useState('');
    const [noticias, setNoticias] = useState(false);
    const [termos, setTermos] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    const [visible, setVisible] = useState(false);
    const [erros, setErros] = useState({});

    const history = useHistory()

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))
        setID(usuario.id)
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setNome(usuario.nome)
        setDia(usuario.dia)
        setMes(usuario.mes)
        setAno(usuario.ano)
        setSexo(usuario.sexo)
        setNoticias(usuario.noticias)
        setTermos(usuario.termos)
        setPlaylists(usuario.playlists)
    }, [])


    async function editarCampos(e) {
        e.preventDefault()

        let dados = { email, senha, nome, dia, mes, ano, sexo, noticias, termos, playlists}


        axios.put(`http://localhost:3001/users/${id}`, dados)
            .then(res => console.log(res.data))
            
        localStorage.setItem('usuarioLogado', JSON.stringify(dados));
        cor = '#1ab26b'
        text = 'Editado com sucesso!'

        //Mostrar toast
        setVisible(true)

        setTimeout(() => {
            setVisible(false)
        }, 2000);

        history.push('/')

    }

    return (

        <div className="escopo-primary">

            {visible == true ? <Toast text={text} color={cor} onClick={setTimeout(() => { text = ''; cor = '' }, 2000)} /> : <></>}

            <div className='ins' className="escopo-secundary">
                <Title />
                <div className='ins' className="escopo-secundary">
                    <form onSubmit={(e) => editarCampos(e)} style={{ width: "80%", textAlign: "center" }}>
                        <div className="inputField d-flex align-items-start flex-column">
                            <label>E-mail</label>
                            <input required type="email" class="bg-transparent border-0" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
                        </div>

                        <div className="inputField d-flex align-items-start flex-column">
                            <label>Senha</label>
                            <input required type="password" class="bg-transparent border-0" value={senha} onBlur={(e) => {
                                if (e.target.value.length <= 0) setErros({ validacaoSenha: true })
                                else setErros({ validacaoSenha: false })

                            }} onChange={(e) => setSenha(e.target.value)} style={{ width: "100%" }} />
                        </div>
                        <div className="inputField d-flex align-items-start flex-column">
                            <label>Como devemos chamar você</label>
                            <input class="bg-transparent border-0" value={nome} onChange={(e) => setNome(e.target.value)} style={{ width: "100%" }} />
                        </div>
                        <div className="inputField d-flex align-items-start flex-column">
                            <label>Data de nascimento</label>
                            <div className="d-flex justify-content-center flex-row w-100">
                                <input class="bg-transparent border-0" type="text" value={dia} onChange={(e) => {
                                    if (e.target.value.length <= 2)
                                        setDia(e.target.value)
                                }} style={{ width: "100%" }} />
                                <select class="bg-transparent border-0 mx-3" value={mes} onChange={(e) => setMes(e.target.value)} style={{ width: "100%" }}>
                                    <option className='nascimento-input-option'>Mês</option>
                                    <option className='nascimento-input-option'>Janeiro</option>
                                    <option className='nascimento-input-option'>Fevereiro</option>
                                    <option className='nascimento-input-option'>Março</option>
                                    <option className='nascimento-input-option'>Abril</option>
                                    <option className='nascimento-input-option'>Maio</option>
                                    <option className='nascimento-input-option'>Junho</option>
                                    <option className='nascimento-input-option'>Julho</option>
                                    <option className='nascimento-input-option'>Agosto</option>
                                    <option className='nascimento-input-option'>Setembro</option>
                                    <option className='nascimento-input-option'>Outubro</option>
                                    <option className='nascimento-input-option'>Novembro</option>
                                    <option className='nascimento-input-option'>Dezembro</option>
                                </select>
                                <input class="bg-transparent border-0" type="text" value={ano} onChange={(e) => {
                                    if (e.target.value.length <= 4)
                                        setAno(e.target.value)
                                }} style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="inputField d-flex align-items-start flex-column">
                            <label>Gênero</label>
                            <div className="d-flex justify-content-between flex-row align-items-center" style={{ width: "100%" }}>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="sexo" checked={sexo == 'Masculino'} onClick={() => setSexo("Masculino")} />
                                    <label className="m-1">Masculino</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="sexo" checked={sexo == 'Feminino'} onClick={() => setSexo("Feminino")} />
                                    <label className="m-1">Feminino</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="sexo" checked={sexo == 'Binario'} onClick={() => setSexo("Binario")} />
                                    <label className="m-1">Não Binário</label>
                                </div>
                            </div>
                        </div>
                        <div className='inside_elements1 justify-content-start py-5'>
                            <div>
                                <div className="align-items-center d-flex justify-content-start">
                                    <input type="checkbox" checked={noticias} onClick={() => setNoticias(!noticias)} />
                                    <label className="mr-1" for="marketing"> Quero Compartilhar dados cadastrais o suporte do Spotify.</label>
                                </div>
                                <div className="align-items-center">
                                    <input className="mr-1" type="checkbox" checked={termos} onClick={() => setTermos(!termos)} />
                                    <label for="marketing"> Eu concordo com os <a href="" style={{ color: "#26C77B" }}>Termos e Condições de Uso do Spotify.</a></label>
                                </div>
                            </div>
                        </div>

                        <input type="submit" style={{ margin: 20 }} value="Editar" class="inscrevase" />

                    </form>
                </div>
            </div>
        </div>
    )

}

export default EditFormulario;
