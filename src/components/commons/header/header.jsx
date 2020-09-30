import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
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
import Categoria from "../../categorias/Categoria";

const HeaderPrueba = () => {
  return (
    <Navbar expand="lg">
      <div className="header-container">
        <img className="logo-buho-header" src={Buho} alt="pinturillo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink href="./categorias">BUHO</NavLink>
          <NavLink href="./categorias">Categorias</NavLink>
          <div className="container-acceso">
            <NavLink href="">
              <Login></Login>
            </NavLink>
            <NavLink href="">
              <Registro></Registro>
            </NavLink>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderPrueba;
