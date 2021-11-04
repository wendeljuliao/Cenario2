import React, { useState } from 'react';
import { useHistory } from 'react-router';

import axios from 'axios';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState({ dadosInvalidos: '' });

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/users?email=${email}`)
            .then((res) => {
                if (res.data[0] != undefined) {
                    const usuario = res.data[0];

                    if (usuario.senha !== senha) {
                        setErros({ dadosInvalidos: 'Dados Inválidos' })
                        return;
                    }

                    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                    props.setLogin(true)

                    history.push('/')
                }
            })
    }

    return (
        <div className="escopo-primary">
            <div className='ins' className="escopo-secundary">
                <form onSubmit={(e) => handleSubmit(e)} style={{ width: "40%", textAlign: "center", margin: "20%" }}>
                    <div className="inputField d-flex align-items-start flex-column">
                        <label>E-mail</label>
                        <input required type="email" class="bg-transparent border-0" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
                    </div>

                    <div className="inputField d-flex align-items-start flex-column">
                        <label>Digite uma senha</label>
                        <input required type="password" class="bg-transparent border-0" value={senha}
                            onChange={(e) => setSenha(e.target.value)} style={{ width: "100%" }} />
                    </div>

                    <input type="submit" style={{ margin: 20 }} value="Entrar" class="inscrevase" />

                </form>
            </div>

        </div>

    )
}