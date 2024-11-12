import { Link } from 'react-router-dom';
import "./TelaModificarLevel.css";
import api from '../../services/api'
import { useEffect, useState } from 'react';
function TelaModificarLevel (){


    const [xp,setXp] = useState('')
    const [levels,setLevel] = useState([])
    const addLevel = async () => {
        try{
        const response = await api.post('/createLevel',{
            xp_level:xp
        })
        console.log(response.data)
        alert('Level adicionado com sucesso')
        getLevels()
     }catch(error){
        alert(error.response.data.msg)
        console.error(error)
     }
 }

 const deleteLevel = async () => {
    try{
    const response = await api.delete('/deleteLevel')
    console.log(response.data)
    alert('Level deletado com sucesso')
    getLevels()
 }catch(error){
    alert(error.response.data.msg)
    console.error(error)
 }
}

const getLevels = async () => {
    try{ 
        const response = await api.get('/levels')
        setLevel(response.data.levels)
        console.log(response.data.levels)
      
     }catch(error){
        alert(error.response.msg)
        console.error(error)
     }    
}

useEffect(() => {
    getLevels();
},[])
    return(
        <div className='container-catalogo'>
        <div className='container-logo'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Alteração</span>de Levels</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Crie e exclua Levels!</p>
                </div>
                <div className='pai-container-mod-level'>
                <div className='container-level'>
                <img src="/img/img-tela-level.svg" alt="foto-modificarlevel" className='img-level' />
                </div>
                <div className='container-mod-level'>
                <h2>Adicione o Level:</h2>
                
                <div className='container-input'>

                <input type="number" value={xp} className="level-input" placeholder="INSIRA O XP DO PRÓXIMO LEVEL"
                onChange={(e) => setXp(e.target.value)}/>
                <div className='container-btns'>
                <button className='btn-level-add' type="button" onClick={() => addLevel()}>ADICIONAR</button>
                <button className='btn-level-excluir' type="button" onClick={() => deleteLevel()}>EXCLUIR</button>
                </div>
                </div>
                </div>

                <div className='container-lista-level'>
                <h3>Lista de Levels:</h3>
                <div className='container-adddicas'> 
               {levels.map((_,index) => (
           <div className='container-levels' key={levels[index].pk_IDlevel}>
               <p>Level {levels ? index +1 : ""} XP  {levels ? levels[index].XP_level : "carregando.." }</p>
            </div>
               ))}
           </div>
                </div>

                </div>

    </div>

    );
}

export default TelaModificarLevel;