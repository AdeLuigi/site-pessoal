import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu(props) {
  const Pagina = props.text;
    return(
      <Navbar className="amarelo-bg fixed-top" expand="lg">
        <Link to="/"><Navbar.Brand href="#home" className="roboto-slab">{Pagina} - Versão 0.1</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/"><Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Link>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Menu;
