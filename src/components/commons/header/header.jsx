import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Pin from "../../../assets/img/pin.png";
import Buho from "../../../assets/img/logo_buho.svg";
import "../header/header.css";
import Login from "../../modales/login/Login";
import Registro from "../../modales/registro/Registro.js";

const HeaderPrueba = () => {
  // function handleClick(){
  //   history.Push('/register')
  //   }

  return (
    <Navbar expand="lg">
      <img className="logo-buho-header" src={Buho} alt="pinturillo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <img
              className="header-pin-image"
              src={Pin}
              alt="header-pin image"
            ></img>
            <NavDropdown.Item href="./categorias">Categoria 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Categoria 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cursos" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Login></Login>
        <Registro></Registro>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderPrueba;
