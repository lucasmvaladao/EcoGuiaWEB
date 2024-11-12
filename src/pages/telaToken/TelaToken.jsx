import "./TelaToken.css";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";


function TelaToken(){

 const [userToken , setUserToken] = useState('')
 const [email , setEmail] = useState('')
 const [token,setToken]  = useState('')
 useEffect(() => {
  if(localStorage.getItem('token') != null){
    setToken(localStorage.getItem('token'))
    setEmail(localStorage.getItem('email'))
    localStorage.clear();
  }
 },[])

  const checkToken = async () => {
    console.log(token)
    if (token != userToken) {
      alert("token inválido ou expirado");
    } else {
      localStorage.setItem('email',email)
      window.location = "/TelaRedefinirSenha"
    }
  };
    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-token.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Token de Proteção</h2>
            <p>Informe o token de verificação que foi<br></br> enviado para o seu e-mail.</p>
            <input type="text" id="input-email" className="cad-input-token" placeholder="******"  onChange={(e) => setUserToken(e.target.value)} />
            <button className="btn-redefinir" onClick={checkToken} >Redefinir Senha</button>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>
    )
}

export default TelaToken;