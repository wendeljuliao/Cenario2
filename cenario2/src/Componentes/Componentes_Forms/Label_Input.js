import React from 'react'
import '../Componentes_Forms/Forms.css'

export default function Label_Input(props) {
    return (
        <div className='elements'>
            <div className='inside_elements1'>
                <div className='inside_elements2'>
                    <label><strong>{props.title}</strong></label><br />
                </div>
            </div>
            <input type={props.type} className='text_box'></input><br />
        </div>
    )
}