import React from 'react'
import Spotify_Logo from './Imagens/Spotify_Logo.png'

export default function Birth_day() {
    return (
        <div className='ins'>

            <div className='inside_elements1'>
                <div className='inside_elements2'>
                    <label><strong>Qual a sua data de Nascimento</strong></label><br />
                </div>
            </div>

            <div className='row1'>

                <div className='nascimento-area'>

                    <div className='side'>
                        <div className='nascimento-obj'>
                            <label className="nascimento-label">Dia</label>
                            <input class="nascimento-input" type="text" />
                        </div>
                        <div className='nascimento-obj'>
                            <label className='nascimento-label'>Mês</label>
                            <select className='nascimento-input' type="text" >
                                <option>Mês</option>
                                <option>Janeiro</option>
                                <option>Fevereiro</option>
                                <option>Março</option>
                                <option>Abril</option>
                                <option>Maio</option>
                                <option>Junho</option>
                                <option>Julho</option>
                                <option>Agosto</option>
                                <option>Setembro</option>
                                <option>Outubro</option>
                                <option>Novembro</option>
                                <option>Dezembro</option>
                            </select>
                        </div>
                        <div class="nascimento-obj">
                            <label className="nascimento-label">Ano</label>
                            <input className="nascimento-input" type="text" />
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}