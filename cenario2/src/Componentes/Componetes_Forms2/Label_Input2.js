import React from 'react'
import '../Componentes_Forms/Forms.css'

export default function Label_Input2(props) {

    const ado = "a"

    function getData(val){
        console.log(val.target.value)
    }

    return (
    <div className="inputField d-flex align-items-start flex-column">
        <label>{props.title}</label>
        <input type={props.type} class="bg-transparent border-0" onchange{...getData} style={{width: "100%"}}/>
    </div>
    )
}