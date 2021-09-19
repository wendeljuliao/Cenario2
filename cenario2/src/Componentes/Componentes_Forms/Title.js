import React from "react";
import '../Componentes_Forms/Forms.css'


export default function Title(){
    return(
        <div className='title'>
        <strong style={{padding:10}}>Inscreva-se grátis e comece a <br/> curtir.</strong><br/>
        <button type="button" className="facebook">Inscrever-se com o Facebook</button>
        </div>
    )
}