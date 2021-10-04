import Birth_day from '../../Componentes_Forms/Birth_day';
import Radio_Box from '../../Componentes_Forms/Radio_Box';
import Title from '../../Componentes_Forms/Title';
import CheckBox from '../../Componentes_Forms/CheckBox';
import '../../../App.css'
import '../css/Formulario.css'


import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Label_Input from '../../Componetes_Forms2/Label_Input2';


const Formulario2 = () =>{

  var n =  new Date();
  var year = n.getFullYear();

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [result] = useState(""); //setResult
  //const onSubmit = (data) => setResult(JSON.stringify(data));

  const novo_usuario = (data_usuario) => {
    if(data_usuario.email == data_usuario.email_c){
      console.log("sim")
      console.log(data_usuario)
    }else{
      //procurar um jeito de colocar um negocio... pop up ou chamar o erro apos o input
      console.log("no")
    }
  };

return (
    <div className="escopo-primary">
        <div className='ins' className="escopo-secundary">
            <Title />
            <div className='ins' className="escopo-secundary">
                <form action="/action_page.php" onSubmit={handleSubmit(novo_usuario)}>
                  <div className="inputField d-flex align-items-start flex-column">
                    <label> Qual o seu Email?</label>
                    
                    <input type="email" {...register("email",{required: true})} class="bg-transparent border-0" style={{width: "100%"}}  />

                  </div>
                  <div className="inputField d-flex align-items-start flex-column">
                    <label>Confirme seu E-mail</label>
                    <input type="email" {...register("email_c",{required: true})} class="bg-transparent border-0" style={{width: "100%"}}/>
                  </div>
                  <div className="inputField d-flex align-items-start flex-column">
                    <label>Crie uma senha</label>

                    <input type="password" {...register("Senha",{required: true})} class="bg-transparent border-0" style={{width: "100%"}}/>

                  </div>
                  <div className="inputField d-flex align-items-start flex-column">

                    <label>Como devemos chamar você</label>

                    <input class="bg-transparent border-0" {...register("Nome",{ required: true, minLength:4, maxLength: 20})} style={{width: "100%"}}/>

                  </div>

                  <div className="inputField d-flex align-items-start flex-column">
                    <label>Data de nascimento</label>
                    <div className="d-flex justify-content-center flex-row">
                      <input class="bg-transparent border-0" type="text" {...register("Dia",{required: true, min:1,max:31})} style={{width: "100%"}}/>
                      <select class="bg-transparent border-0 mx-3" {...register("Mes",{required: true})} style={{width: "100%"}}>
                        <option className='nascimento-input-option' value="" disabled selected>Mês</option>
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
                      <input class="bg-transparent border-0" type="text" {...register("Ano",{required: true, min:1800,max:(year-18)})} style={{width: "100%"}}/>
                    </div>
                  </div>
                  <div className="inputField d-flex align-items-start flex-column">
                    <label>Gênero</label>
                    <div className="d-flex justify-content-between flex-row align-items-center" style={{width: "100%"}}>
                      <div className="d-flex align-items-center">  
                        <input type="radio" name="sexo"/>
                        <label className="m-1">Masculino</label>
                      </div>
                      <div className="d-flex align-items-center">  
                        <input  type="radio" name="sexo"/>
                        <label className="m-1">Feminino</label>
                      </div>
                      <div className="d-flex align-items-center">  
                        <input type="radio" name="sexo"/>
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
                      <label for="marketing"> Eu concordo com os <a href="" style={{color: "#26C77B" }}>Termos e Condições de Uso do Spotify.</a></label>
                    </div>
                  </div>
                </div>
                <div className="elementsFundo">

                  <p>{errors.Nome?.type === "required" && "Campo Obrigatorio"}</p>







                </div>
                <div className="elementsFundo">
                  <input type="submit" style={{margin:12}} value="Inscreva-se" class="inscrevase" />
                </div>
                </form>
            </div>         
        </div>
    </div>
  )

}

export default Formulario2;