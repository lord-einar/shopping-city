import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
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
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Informatica</NavDropdown.Item>
            </NavDropdown>
            <CartWidgetComponent />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBarComponent
