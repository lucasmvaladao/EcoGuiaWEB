import "./TelaRedefinirSenha.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useState , useEffect } from "react";
function TelaRedefinirSenha(){

    useEffect(() => {
        if(localStorage.getItem('email') != null){
          setEmail(localStorage.getItem('email'))
          localStorage.clear();
        }
       },[])

    const [email,setEmail] = useState('')
    const [pwd, setPwd] = useState("");
    const [checkPwd, setCheckPwd] = useState("");

const newPassword = async () => {
      if (pwd != checkPwd) {
        alert("As senhas estão diferentes");
        return;
      }
      try {
        const response = await api.post("/user/pwd", { pwd, email });
        console.log(response);
        if (response.status == 200) {
          alert("Senha alterada com sucesso");
          window.location = '/Login'
        }
      } catch (error) {
        alert(error.response.data.erro);
      }
    };

   
    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-redef-senha.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Redefinir Senha</h2>
            <p>Informe a nova senha.</p>
            <input type="text" id="input-email" className="cad-input-token" placeholder="Senha" onChange={(e) => setPwd(e.target.value)}/>
            <input type="text" id="input-email" className="cad-input-token" placeholder="Confirmar Senha" onChange={(e) => setCheckPwd(e.target.value)} />
            <button className="btn-redef" onClick={newPassword}>Redefinir Senha</button>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>
    )
 }

export default TelaRedefinirSenha;