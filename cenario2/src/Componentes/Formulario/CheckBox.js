import React from 'react'
import './Forms.css'

export default function CheckBox(props) {
    return (
        <div className='checkbox'>
            <div>
                <input type="checkbox" />
                <label for="marketing"> Compartilhar meus dados cadastrais com os provedores de <br /> conteúdo do Spotify para fins de marketing.</label>
            </div>
            <div>
                <input type="checkbox" />
                <label for="marketing"> Eu concordo com os <a href=""
                    style={{ 'color': "#26C77B" }}>Termos e Condições de Uso do Spotify.</a></label>
            </div>
            <br />
        </div>
    )
}