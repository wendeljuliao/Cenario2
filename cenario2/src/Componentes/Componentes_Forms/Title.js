import React from "react";
import Logo from "../Componentes_Forms/Imagens/Spotify_Logo.png"
import '../Componentes_Forms/Forms.css'


export default function Title(){
    //<img style={{width:"10%", height:"10%"}} className='logo' src={Logo}/><br/>
    return(
        <div className='title'>
        <strong style={{padding:10}}>Inscreva-se grátis e comece a <br/> curtir.</strong><br/>
        <button type="button" className="facebook">Inscrever-se com o Facebook</button>
        </div>
    )
}