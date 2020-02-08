import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import imagem from './img/worka.jpg';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <>
      <Menu text="Home"/>
      <body>
      <div className="tudo">
      <Link to="/page">
          <div className="bloco_principal primeiro">
            <img src={imagem} alt="asdasdds"/>
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
            <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
            <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve'-r since t</p>
          </div>
      </Link>    
        <Link>
          <div className="bloco_principal">
            <img src={imagem} alt="asdasdds"/>
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
            <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
            <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
          </div>
        </Link>
        <Link>
          <div className="bloco_principal">
            <img src={imagem} alt="asdasdds"/>
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
            <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
            <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
          </div>
        </Link>
        <Link>
          <div className="bloco_principal">
            <img src={imagem} alt="asdasdds"/>
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
            <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
            <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
          </div>
        </Link>
        <Link>
          <div className="bloco_principal">
            <img src={imagem} alt="asdasdds"/>
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
            <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
            <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
          </div>
        </Link>
      </div>
      <Footer/>
      </body>
   </> 

  );
}

export default App;
