import React from 'react'

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