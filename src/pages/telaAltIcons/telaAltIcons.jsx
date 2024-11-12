import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./telaAltIcons.css";
import api from '../../services/api';


function TelaAltIcons() {

    useEffect(() => {
     getAllAvatar()
    },[])

    const [avatar,setAvatar] = useState([])
    const getAllAvatar = async () =>{
        try {
          const response = await api.get('/avatars')
          setAvatar(response.data.avatares)
        }
        catch(erro){
          console.log(erro)
        }
      }
    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <a href="/">SOBRE</a>
                <a href="/">HORÁRIOS DAS COLETAS</a>
                <a href="/">ARTIGOS</a>
                <a href="/">ECOPONTOS</a>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">LOGIN</Link>
            </div>
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Icons</span>para Perfis</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Edite o seu icone com a foto que preferir!<br></br> Clique no icone que quer editar.</p>
            </div>
            <div className='pai-container-alticons'>
            <div className='container-alticons'>
                {avatar.map((_, index) => (
                <Link key={index} to="/PagEditIcon" className='icon-link' onClick={() => localStorage.setItem('avatar',avatar[index].blob_avatar)}> 
                <img className='img-icon-alt' src={avatar[index].blob_avatar} alt={`icon-${index}`} />
                </Link>
                    ))}
                </div>

               
            </div>
        </div>
    );
}

export default TelaAltIcons;
