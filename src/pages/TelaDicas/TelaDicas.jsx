import { Link } from 'react-router-dom';
import "./TelaDicas.css";

function TelaDicas(){
    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <Link to="/Funcionalidades">SOBRE</Link>
                <Link to="/">HORÁRIOS DAS COLETAS</Link>
                <Link to="/">ARTIGOS</Link>
                <Link to="/">ECOPONTOS</Link>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Dicas</span>Diárias</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Edite e atualize aqui as dicas diárias!</p>
            </div>
            <div className='pai-container-teladicas'>
                <Link className='btn-adicionar' to="/TelaDicasAdd">Adicionar + </Link>
                <div className='container-adddicas'>
                <div className='container-dicaum'>
                   <h5>Dica 1</h5>
                   <button>Visualizar</button>
                   <button>Apagar</button>
                   </div>
                <div className='container-dicadois'>
                   <h5>Dica 2</h5>
                   <button>Visualizar</button>
                   <button>Apagar</button>
                   </div>
                <div className='container-dicatres'>
                   <h5>Dica 3</h5>
                   <button>Visualizar</button>
                   <button>Apagar</button>
                   </div>
                <div className='container-dicaquatro'>
                   <h5>Dica 4</h5>
                   <button>Visualizar</button>
                   <button>Apagar</button>
                   </div>
                    
                    </div>
                </div>
        </div>
    );
}

export default TelaDicas;
