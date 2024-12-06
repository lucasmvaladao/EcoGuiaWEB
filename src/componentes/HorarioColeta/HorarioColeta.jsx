import './HorarioColeta.css';
import {Link} from "react-router-dom";
import api from '../../services/api';
import { useState, useEffect } from 'react';


function HorarioColeta() {

    const [dados,setDados] = useState('')
    const [cep,setCep]     = useState('')
    const[loading,setLoading] = useState(false)
    const[hidden , setHiden] = useState(true)
    const getTime = async () => {
        setLoading(true)
        try{
          const response = await api.post('/pickupTime',{cep})
          setDados(response.data)
          setHiden(false)
        }catch(error){
          alert(error.response.data.msg)
          setDados('')
          console.error(error)
        }
  setLoading(false)
      };

      const [artigos, setArtigos] = useState([]);

    const fetchArticles = async () => {
        try {
            const resposta = await api.get("/articles");
            setArtigos(resposta.data.results || []); // Garantindo que seja um array
            console.log(resposta.data.results); // Log para verificar os dados recebidos
        } catch (error) {
            alert("Erro ao pegar os dados");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const formatarData = (data) => {
      const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Date(data).toLocaleDateString('pt-BR', opcoes);
    };

    return (
      <div className='coleta-container'>
         <div className='horario-container' id='horarios'>
                <img src="/img/horariocoleta.svg" alt="foto-horariocoleta" className='icon-hc' />
            </div>
            <div className='hc-container'>
                <h2> <span className='highlight'> Horários </span> da Coleta </h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='ret-coleta'/>
                <p>Confira através do seu CEP, quais são os horários e datas que os caminhões<br /> de coleta padrão e coleta sustentável passam em sua rua!</p>
                <div className='hc-botao'>
                    <input type="number" id="input-id" className="form-input" placeholder="INSIRA O CEP" onChange={(e) => setCep(e.target.value)} />
                    {loading?
                    <div></div> 
                    :
                    <button className='btn-cep' type="button" onClick={() => getTime()}>BUSCAR</button>}
                    
             </div>      
      </div>
<div className='horario'>
{loading? 
    <div class="loader"></div>
    :
    <div className="tabela-container" hidden={hidden}>
    {/* Cabeçalho da tabela */}
    <table className="table">
      <thead>
        <tr className="table-header">
          <th className="table-header-text">Dia</th>
          <th className="table-header-text">Comum</th>
          <th className="table-header-text">Seletiva</th>
        </tr>
      </thead>
      <tbody>
        {/* Linhas da tabela */}
        {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((dia, index) => (
          <tr key={index} className="table-row">
            <td className="table-cell">{dia}</td>
            <td className="table-cell">
            {dados && dados[dia] ? dados[dia].domiciliar : '-'}
            </td>
            <td className="table-cell">
            {dados && dados[dia] ? dados[dia].seletiva : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>} 
</div>
            <div id='artigos' className='containerCatalogo'> 
            <img src="/img/folhas.svg" alt="img-folhas" className='folhas' />   
                     
        </div>

            <div className='container-artigos'>
                <h2><span className='highlight'> Catálago </span> Sustentável</h2>
                <img src='/img/icon-artigos.svg' alt='globo-artigos' className='g-artigos' />
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-artigos' className='ret-artigos' />
                <p>Encontre toda informação necessária para ter uma<br />vida mais sustentável e um consumo consciente!</p>
            </div>

            <div className='pai-div-parte'>
                <div className='container-artigo-grande'>
                    {artigos.length > 0 && (
                        <>
                            <img src={artigos[0].image_article} alt={artigos[0].title_article} className='img-not-grande' />
                            <h4>{artigos[0].title_article}</h4>
                            <p>{formatarData(artigos[0].date_article)}</p>
                            <Link to={`/catalogo/${artigos[0].pk_IDarticle}`} className='link-clicavel'></Link>
                        </>
                    )}
                </div>

                <div className='container-artigos-pequenos'>
                    {artigos.length > 1 ? (
                        artigos.slice(1, 4).map((artigo) => (
                            <div className='container-artigo-pequeno' key={artigo.pk_IDarticle}>
                                <img src={artigo.image_article} alt={artigo.title_article} className='img-not-pequena' />
                                <div className='texto-artigo'>
                                    <h5>{artigo.title_article}</h5>
                                    <p className='data-artigo'>{formatarData(artigo.date_article)}</p>
                                </div>
                                <Link to={`/catalogo/${artigo.pk_IDarticle}`} className='link-clicavel'></Link>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum artigo disponível.</p>
                    )}
                </div>
            </div>

        <div className='container-FimCatalogo'> 
            <img src="/img/folhas.svg" alt="img-folhas" className='FimFolhas' />   
                     
        </div>

        <div id="ecopontos" className='container-EcoPonto'>
        <h2><span className='highlight'> ECO</span>PONTO</h2>
        <img src='/img/retangulo-hcoleta.svg' alt='retangulo-ecoponto' className='ret-ecoponto'/>
        <p>Recicle nos ecopontos perto de você! Confira no<br></br> mapa interativo o mais próximo!</p>
        <div className='container-mapa'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1Kok7L5JyjXN758y3vy3kMsKYdJylrQE&hl=pt-BR&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
        <div  className='container-ajudasp'>
        <img src='/img/ajuda-sp.svg' alt='ajuda sao paulo' className='ajuda-sp'/>
        </div>
        </div>
           
        </div>
    );
}

export default HorarioColeta;
