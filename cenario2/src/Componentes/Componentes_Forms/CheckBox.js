import React from 'react'
import '../Componentes_Forms/Forms.css'

export default function CheckBox(props) {
    return (
        <div className='inside_elements1'>
            <div className='checkbox'>
            <div>
                <input type="checkbox" />
                <label for="marketing"> Quero Compartilhar dados cadastrais o suporte do Spotify.</label>
            </div>
            <div>
                <input type="checkbox" />
                <label for="marketing"> Eu concordo com os <a href=""
                    style={{ 'color': "#26C77B" }}>Termos e Condições de Uso do Spotify.</a></label>
            </div>
            <br />
        </div>
        </div>
        
    )
}