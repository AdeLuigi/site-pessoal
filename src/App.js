import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Nav, Navbar} from 'react-bootstrap';
import imagem from './img/worka.jpg';
function App() {
  return (
    
    <>
       <Navbar className="amarelo-bg fixed-top" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <body>
      <div className="tudo">
        <div className="bloco_principal primeiro">
          <img src={imagem} alt="asdasdds"/>
          <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
          <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
          <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve'-r since t</p>
        </div>
        <div className="bloco_principal">
          <img src={imagem} alt="asdasdds"/>
          <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
          <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
          <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
        </div>
        <div className="bloco_principal">
          <img src={imagem} alt="asdasdds"/>
          <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
          <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
          <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
        </div>
        <div className="bloco_principal">
          <img src={imagem} alt="asdasdds"/>
          <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
          <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
          <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
        </div>
        <div className="bloco_principal">
          <img src={imagem} alt="asdasdds"/>
          <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
          <p className="amarelo-color">Ademario Vitor - 7 de Fevereiro</p>
          <p className="texto-resumo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t</p>
        </div>
      </div>
      </body>
   </> 

  );
}

export default App;
