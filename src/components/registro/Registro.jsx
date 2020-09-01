import React, { Component, useState } from "react";
import "./Registro.css";
import Title from "../commons/title/Title";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";
import { RadioButton } from "primereact/radiobutton";
import Calendario from "../Calendar";

import RegistroService from "../service/RegistroService";

export default class RegistroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      usuario: {
        userType: null,
        fullName: null,
        country: null,
        identificationType: null,
        identification: null,
        birthDate: null,
        email: null,
        password: null,
      },
    };

    this.registroService = new RegistroService();
    this.save = this.save.bind(this);
  }

  RadioButtonsGroup() {
    const [value, setValue] = React.useState("ESTUDIANTE");
  }

  save() {
    this.registroService.save(this.state.usuario).then((data) => {
      this.setState({
        visible: false,
        usuario: {
          userType: null,
          fullName: null,
          country: null,
          identificationType: null,
          identification: null,
          birthDate: null,
          email: null,
          password: null,
        },
      });
    });
  }

  render() {
    return (
      <div className="registro-container">
        <Title text={"REGISTRO"} />
        <form id="empleado-form">
          <div className="user-name">
            <label htmlFor="nombre">Nombre:</label>
            <input
              value={this.state.usuario.fullName}
              id="fullName"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.fullName = val;
                  return { usuario };
                });
              }}
            />

            <label htmlFor="identification">Correo:</label>
            <input
              value={this.state.usuario.email}
              id=" email"
              type="email"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.email = val;
                  return { usuario };
                });
              }}
            />

            <label htmlFor="identification">Contraseña:</label>
            <input
              value={this.state.usuario.password}
              id="password"
              type="password"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.password = val;
                  return { usuario };
                });
              }}
            />
          </div>
          <label className="Registro-label">Tipo Usuario:</label>
          <div className="register-user-type">
            <input
              type="radio"
              inputId="rb2"
              name="Estudiante"
              value="ESTUDIANTE"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.userType = val;
                  return { usuario };
                });
              }}
            />
            <label htmlFor="rb1" className="p-radiobutton-label">
              Estudiante
            </label>

            <input
              type="radio"
              inputId="rb2"
              name="Docente"
              value="DOCENTE"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.userType = val;
                  return { usuario };
                });
              }}
            />
            <label htmlFor="rb1" className="p-radiobutton-label">
              Docente
            </label>
          </div>

          <label className="Registro-pais-label">Selecciona tu Pais:</label>
          <select
            value={this.state.usuario.country}
            className=""
            placeholder="pais"
          >
            <option value="032">Argentina</option>
            <option value="068">Venezuela</option>
            <option value="152">Estados Unidos</option>
          </select>

          <label className="registro-label">Tipo de Documento:</label>
          <div className="register-user-type">
            <input
              type="radio"
              inputId="rb2"
              name="Pasaporte"
              value="Pasaporte"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.identificationType = val;
                  return { usuario };
                });
              }}
            />
            <label htmlFor="rb1" className="p-radiobutton-label">
              Pasaporte
            </label>

            <input
              type="radio"
              inputId="rb2"
              name="Docente"
              value="DOCENTE"
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.identificationType = val;
                  return { usuario };
                });
              }}
            />
            <label htmlFor="rb1" className="p-radiobutton-label">
              DNI
            </label>
          </div>

          <label htmlFor="identification">Documento</label>
          <input
            value={this.state.usuario.identification}
            id="identification"
            onChange={(e) => {
              let val = e.target.value;
              this.setState((prevState) => {
                let usuario = Object.assign({}, prevState.usuario);
                usuario.identification = val;
                return { usuario };
              });
            }}
          />
          <br />
          <div className="date">
            <label htmlFor="identification">Fecha de Nacimiento</label>
            <Calendario />
          </div>
        </form>

        <div className="register">
          <button label="Guardar" onClick={this.save}>
            Register{" "}
          </button>
        </div>
      </div>
    );
  }
}
