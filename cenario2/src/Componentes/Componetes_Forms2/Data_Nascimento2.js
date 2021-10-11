import React from 'react'
import '../Componentes_Forms/Forms.css'

function Data_Nascimento2(props) {

    return (

    <div className="inputField d-flex align-items-start flex-column">
        <label>{props.title}</label>
        <input type={props.tipo} value={props.email} onChange={(e) => props.update(e.target.value) }
         class="bg-transparent border-0"  style={{width: "100%"}}/>
    </div>
    )

}
export default Data_Nascimento2;