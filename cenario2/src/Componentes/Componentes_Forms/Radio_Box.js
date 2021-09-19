import React from "react";
import '../Componentes_Forms/Forms.css'


export default function Radio_Box() {
    return (
        <div className='ins'>
            <div className='inside_elements1'>
                <div className='inside_elements2'>
                    <label style={{ 'padding-top': 8, 'padding-bottom': 8 }}><strong>Como devemos chamar você?</strong></label><br />
                </div>
            </div>
            <div className='row1'>

                <div className='side'>

                    <div class="ins3">
                        <input type="radio" id="col_ani" name="sexo" />
                        <label for="day">Masculino</label><br />
                    </div>
                    <div class="ins3">

                        <input type="radio" id="col_ani" name="sexo" />
                        <label for="month">Feminino</label><br />
                    </div>
                    <div >
                        <input type="radio" id="col_ani" name="sexo" />
                        <label for="year">Não binário</label><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
