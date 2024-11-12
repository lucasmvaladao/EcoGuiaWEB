import "./TelaEsqueciSenha.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
function TelaEsqueciSenha(){

  const [email, setEmail] =  useState('')

  const sendEmail = async (e) => {
    try {
      const response = await api.post("/user/token", { email });
      console.log(response.data);
      localStorage.setItem('email', email);
      localStorage.setItem('token', response.data.token)
      alert(localStorage.getItem('token'))
      alert(response.data.msg);
      window.location = "/TelaToken"
    } catch (erro) {
      console.log(email);
      console.log(erro.response);
      alert(erro.response)
    }
  }

    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-redefinir-senha.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Redefinir Senha</h2>
            <p>Informe o e-mail para o qual deseja<br></br>redefinir a sua senha.</p>
            <input type="text" id="input-email" className="cad-input-redefinir" placeholder="seuemail@ecoguia.com" onChange={(e) => setEmail(e.target.value)}/>
            <button className="btn-redefinir" onClick={sendEmail}>Redefinir Senha</button>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>

    )
}

export default TelaEsqueciSenha;


