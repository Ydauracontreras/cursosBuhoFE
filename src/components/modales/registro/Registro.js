import React, { Component, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

import 'primeflex/primeflex.css';
import { Calendar } from 'primereact/calendar';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import '../Modales.css';
import Calendario from '../../Calendar';
import { RadioButtons } from '../../RadioButtons';
import {AuthenticationService} from "../../service/AuthenticationService";
import "./Registro.css";
import {AlertService} from "../../service/AlertService"

export default class Registro extends Component {

    constructor() {
        super();
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
        
        
        this.save = this.save.bind(this);
        this.items = [
            {
                label: 'Registrarse',
                command: () => { this.showRegistrationDialog() }
            },
        ]


    }


    save() {
        
        AuthenticationService.register(this.state.usuario).then((data) => {
            AlertService.success('Registrade con exito!');
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
            <div  >

                <Menubar model={this.items} />
                <Dialog header="Registro" visible={this.state.visible} footer={this.footer} style={{ width: "30%", height: "80%" }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <div className="registro-container">
                        <form id="empleado-form" className="registro-dialog">
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">

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
                            <div className="form-group">

                                <label className="Registro-label">aaaTipo Usuario:</label>
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
                            </div>
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">
                                <label htmlFor="identification">Fecha de Nacimiento</label>
                                <Calendario />
                            </div>
                        </form>

                        <div className="form-group">
                            <button label="Guardar" onClick={this.save}>
                                Registrarse!{" "}
                            </button>
                        </div>
                    </div>

                </Dialog>
                {/* <Growl ref={(el) => this.growl = el} /> */}
            </div >
        );
    }

    showRegistrationDialog() {
        this.setState({
            visible: true,

        });

    }



}