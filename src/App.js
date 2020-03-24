import React, { useEffect, useState } from 'react';
import api from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import Footer from './Footer';

function App() {
  const [artigos, setArtigos] = useState([]);


  useEffect(() => {
      async function carregaArtigos() {
          const response = await api.get('/');
         setArtigos(response.data);
      }
      carregaArtigos();
  }, []);



  return (
    <>
      <Menu text="Home"/>
      <body>
      {

      }
      <div className="tudo">
          {artigos.map(artigo =>(
            
            <Link to={"/page/"+artigo._id} text={artigo._id}>
              <div key={artigo._id} className="bloco_principal primeiro">
                <img src={artigo.imagem} alt="asdasdds"/>
                <h1>{artigo.titulo}</h1>
                <p className="amarelo-color">{artigo.nome}</p>
                <p className="texto-resumo">{artigo.texto}t</p>
              </div>
          </Link>  
          ))}

      </div>
      <Footer/>
      </body>
   </> 

  );
}

export default App;
