import React from 'react'
import '../Componentes_Forms/Forms.css'

function CheckBox(props) {

    return (

    <div className="align-items-center d-flex justify-content-start">
        <input type="checkbox" checked={noticias} onClick={() => props.setNoticias(!noticias)} />
        <label className="mr-1" for="marketing"> props.Texto</label>
      </div>

    )

}
export default CheckBox;