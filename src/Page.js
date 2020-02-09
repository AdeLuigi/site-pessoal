import React, { useEffect, useState } from 'react';
import api from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import imagem from './img/worka.jpg';
import Footer from './Footer';
import './css/Page.css';
function Page(props) {
  const url =props.location.pathname;
  console.log(url);
  window.scrollTo(0,0);

  const [artigo, setArtigo] = useState([]);

  useEffect(() => {
      async function carregaArtigo() {
          const response = await api.get(url);
         setArtigo(response.data);
      }
      carregaArtigo();
  }, []);

  console.log(artigo);
  
  return (
    
    <>
      <Menu text="Artigo"/>
      <body>
      <div className="tudo-page">
        <div className="titulo">
            <h1>{artigo.titulo}</h1>
        </div>
        <div className="imagem-page">
          <img src={artigo.imagem} alt="asdasdds"/>
        </div>
        <div className="nome centralizado-90">
          {artigo.nome}
        </div>
        <div className="data centralizado-90">
           7 de Fevereiro de 2020, 1h03
        </div>
        <div className="artigo centralizado-90">
          <p><strong><span className="marcador"> </span> Lorem Ipsum is simply dummy text </strong><span className="texto-inicial">lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</span></p>

        </div>
      </div>
      <Footer/>
      </body>
   </> 

  );
}

export default Page;
