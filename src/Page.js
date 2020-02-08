import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Page.css';
import {Nav, Navbar} from 'react-bootstrap';
import imagem from './img/worka.jpg';
function Page() {
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
      <div className="tudo-page">
        <div className="titulo">
            <h1>Titulo da materia explicando um pouco sobre o rolê e as coisas que tão acontecendo</h1>
        </div>
        <div className="imagem-page">
          <img src={imagem} alt="asdasdds"/>
        </div>
        <div className="nome centralizado-90">
          Ademario Vitor
        </div>
        <div className="data centralizado-90">
           7 de Fevereiro de 2020, 1h03
        </div>
        <div className="artigo centralizado-90">
          <p><strong><span className="marcador"> </span> Lorem Ipsum is simply dummy text </strong><span className="texto-inicial">lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</span></p>
          <p className="texto-inicial"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc vel nisi malesuada convallis. Nulla at turpis non est bibendum scelerisque. Nunc quis consectetur tellus. Maecenas vel ipsum in nulla posuere finibus efficitur at sem. Vestibulum ac euismod ex. Sed dictum, urna eu placerat suscipit, magna lectus pretium arcu</p>
          <p className="texto-inicial"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc vel nisi malesuada convallis. Nulla at turpis non est bibendum scelerisque. Nunc quis consectetur tellus. Maecenas vel ipsum in nulla posuere finibus efficitur at sem. Vestibulum ac euismod ex. Sed dictum, urna eu placerat suscipit, magna lectus pretium arcu</p>
          <p><strong><span className="marcador"> </span> " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc vel nisi malesuada convallis "</strong></p>
          <p className="texto-inicial"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc vel nisi malesuada convallis. Nulla at turpis non est bibendum scelerisque. Nunc quis consectetur tellus. Maecenas vel ipsum in nulla posuere finibus efficitur at sem. Vestibulum ac euismod ex. Sed dictum, urna eu placerat suscipit, magna lectus pretium arcu</p>
          <p className="texto-inicial"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc vel nisi malesuada convallis. Nulla at turpis non est bibendum scelerisque. Nunc quis consectetur tellus. Maecenas vel ipsum in nulla posuere finibus efficitur at sem. Vestibulum ac euismod ex. Sed dictum, urna eu placerat suscipit, magna lectus pretium arcu</p>

        </div>
      </div>
      <div className="footer roboto-slab">
          <span>Copyright © ademario.com.br</span>
      </div>
      </body>
   </> 

  );
}

export default Page;
