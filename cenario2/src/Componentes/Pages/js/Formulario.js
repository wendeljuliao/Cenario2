import Birth_day from '../../Componentes_Forms/Birth_day';
import Label_Input from '../../Componentes_Forms/Label_Input';
import Radio_Box from '../../Componentes_Forms/Radio_Box';
import Title from '../../Componentes_Forms/Title';
import CheckBox from '../../Componentes_Forms/CheckBox';
import '../../../App.css'


function Formulario() {
  return (
    <div className="escopo-primary">
        <div className='ins' className="escopo-secundary">
            <Title />
            <div className='ins' className="escopo-secundary">
                <form action="/action_page.php">
                <Label_Input title='Qual é o seu e-mail?' type='email' />
                <Label_Input title='Confirme o seu e-mail' type='email' />
                <Label_Input title='Crie uma senha' type='password' />
                <Label_Input title='Como devemos chamar você?' type='text' />
                <Birth_day />
                <Radio_Box />
                <CheckBox />

                </form>
                <input type="submit" style={{margin:12}} value="Inscreva-se" class="inscrevase" />
            </div>         
        </div>
    </div>
  )

}

export default Formulario;
