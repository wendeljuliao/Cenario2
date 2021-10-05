import Birth_day from '../../Componentes_Forms/Birth_day';
import Radio_Box from '../../Componentes_Forms/Radio_Box';
import Title from '../../Componentes_Forms/Title';
import CheckBox from '../../Componentes_Forms/CheckBox';
import '../../../App.css'
import '../css/Formulario.css'
import { useState } from 'react';


function Formulario() {
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [noticias, setNoticias] = useState(false);
  const [termos, setTermos] = useState(false);

  function enviarCampos(e) {
    e.preventDefault()

  }

  return (
    <div className="escopo-primary">
      <div className='ins' className="escopo-secundary">
        <Title />
        <div className='ins' className="escopo-secundary">
          <form onSubmit={(e) => enviarCampos(e)}>
            <div className="inputField d-flex align-items-start flex-column">
              <label>E-mail</label>
              <input type="email" class="bg-transparent border-0" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
            </div>
            <div className="inputField d-flex align-items-start flex-column">
              <label>Confirme seu E-mail</label>
              <input type="email" class="bg-transparent border-0" style={{ width: "100%" }} />
            </div>
            <div className="inputField d-flex align-items-start flex-column">
              <label>Crie uma senha</label>
              <input type="password" class="bg-transparent border-0" style={{ width: "100%" }} />
            </div>
            <div className="inputField d-flex align-items-start flex-column">
              <label>Como devemos chamar você</label>
              <input class="bg-transparent border-0" style={{ width: "100%" }} />
            </div>
            <div className="inputField d-flex align-items-start flex-column">
              <label>Data de nascimento</label>
              <div className="d-flex justify-content-center flex-row">
                <input class="bg-transparent border-0" type="text" style={{ width: "100%" }} />
                <select class="bg-transparent border-0 mx-3" style={{ width: "100%" }}>
                  <option className='nascimento-input-option'>Mês</option>
                  <option className='nascimento-input-option'>Janeiro</option>
                  <option className='nascimento-input-option'>Fevereiro</option>
                  <option className='nascimento-input-option'>Março</option>
                  <option className='nascimento-input-option'>Abril</option>
                  <option className='nascimento-input-option'>Maio</option>
                  <option className='nascimento-input-option'>Junho</option>
                  <option className='nascimento-input-option'>Julho</option>
                  <option className='nascimento-input-option'>Agosto</option>
                  <option className='nascimento-input-option'>Setembro</option>
                  <option className='nascimento-input-option'>Outubro</option>
                  <option className='nascimento-input-option'>Novembro</option>
                  <option className='nascimento-input-option'>Dezembro</option>
                </select>
                <input class="bg-transparent border-0" type="text" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="inputField d-flex align-items-start flex-column">
              <label>Gênero</label>
              <div className="d-flex justify-content-between flex-row align-items-center" style={{ width: "100%" }}>
                <div className="d-flex align-items-center">
                  <input type="radio" name="sexo" checked={sexo == 'Masculino'} onClick={() => setSexo("Masculino")} />
                  <label className="m-1">Masculino</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="radio" name="sexo" checked={sexo == 'Feminino'} onClick={() => setSexo("Feminino")} />
                  <label className="m-1">Feminino</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="radio" name="sexo" checked={sexo == 'Binario'} onClick={() => setSexo("Binario")} />
                  <label className="m-1">Não Binário</label>
                </div>
              </div>
            </div>
            <div className='inside_elements1 justify-content-start py-5'>
              <div>
                <div className="align-items-center">
                  <input type="checkbox" />
                  <label className="mr-1" for="marketing"> Quero Compartilhar dados cadastrais o suporte do Spotify.</label>
                </div>
                <div className="align-items-center">
                  <input className="mr-1" type="checkbox" />
                  <label for="marketing"> Eu concordo com os <a href="" style={{ color: "#26C77B" }}>Termos e Condições de Uso do Spotify.</a></label>
                </div>
              </div>
            </div>

          </form>
          <input type="submit" style={{ margin: 12 }} value="Inscreva-se" class="inscrevase" />
        </div>
      </div>
    </div>
  )

}

export default Formulario;
