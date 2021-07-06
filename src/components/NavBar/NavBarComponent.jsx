import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import CartWidgetComponent from '../CartWidget/CartWidgetComponent';

function NavBarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
            <img
              alt=""
              src='logo.svg'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Shopping City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/categorias/calzado'}>Calzado</Nav.Link>
            <Nav.Link as={Link} to={'/categorias/indumentaria'}>Indumentaria</Nav.Link>
            <Nav.Link as={Link} to={'/categorias/herramientas'}>Herramientas</Nav.Link>
            <Nav.Link as={Link} to={'/categorias/informatica'}>Informatica</Nav.Link>
            

            <CartWidgetComponent />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBarComponent
