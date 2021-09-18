import Birth_day from '../Formulario/Birth_day';
import '../Formulario/Faq.css'
import Label_Input from '../Formulario/Label_Input';
import Radio_Box from '../Formulario/Radio_Box';
import Title from '../Formulario/Title';
import CheckBox from '../Formulario/CheckBox';


function App() {
  return (
    <>
      <Title />
      <div className='ins'>
        <form action="/action_page.php">
          <Label_Input title='Qual é o seu e-mail?' type='email' />
          <Label_Input title='Confirme o seu e-mail' type='email' />
          <Label_Input title='Crie uma senha' type='password' />
          <Label_Input title='Como devemos chamar você?' type='text' />
          <Birth_day />
          <Radio_Box />
          <CheckBox />

        </form>
        <input type="submit" value="Inscreva-se" class="inscrevase" />
      </div>

    </>
  )

}

export default App;
