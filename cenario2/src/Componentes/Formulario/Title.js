import React from "react";
import Logo from "./Imagens/Spotify_Logo.png"
import './Forms.css'


export default function Title(){
    return(
        <div className='title'>
        <img style={{width:"10%", height:"10%"}} className='logo' src={Logo}/><br/>
        <strong>Inscreva-se grátis e comece a <br/> curtir.</strong><br/>
        <button type="button" className="facebook">Inscrever-se com o Facebook</button>
        </div>
    )
}