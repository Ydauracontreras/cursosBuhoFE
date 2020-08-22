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


export default class Registro extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
        };
        this.items = [
            {
                label: 'Registrarse',
                command: () => { this.showSaveDialog() }
            },
        ]


    }

    render() {


        return (
            <div  >

                <a><Menubar model={this.items} /></a>
                <Dialog header="Registro" visible={this.state.visible} footer={this.footer} style={{ width: "30%", height: "80%" }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <form id="registro">

                        <div>
                            <label className='Registro-label'>Ingresa tu nombre Completo:</label>
                            <input className='col-12' placeholder="Nombre"></input>

                            <label className='Registro-label'>Selecciona tu Pais:</label>
                            <select value='' className='col-12' placeholder="pais">
                                <option value=''>Argentina</option>
                                <option value=''>Venezuela</option>
                                <option value=''>Estados Unidos</option>

                            </select>
                            <label className='Registro-label'>Tipo de Documento:</label>
                            <select value='' className='col-12' placeholder="pais">
                                <option value=''>DNI</option>
                                <option value=''>Pasaporte</option>

                            </select>
                            <label className='Registro-label'>Numero de Documento:</label>
                            <input className='col-12' placeholder="Ej: 20123654"></input>

                            <label className='Registro-label'>Fecha de Nacimiento:</label>
                            <br />
                            <Calendario />
                            <br />
                            <label className='Registro-label'>Tipo de Usuario:</label>
                            <br />

                            <RadioButtons />

                            <label className='Registro-label'>Email:</label>
                            <input className='col-12' placeholder="email"></input>

                            <label className='Registro-label'>Contraseña:</label>
                            <input className='col-12' placeholder="password"></input>


                            <button className='Boton-registro' type='submit'>Resgistro</button>
                        </div>

                    </form>
                </Dialog>
                {/* <Growl ref={(el) => this.growl = el} /> */}
            </div >
        );
    }

    showSaveDialog() {
        this.setState({
            visible: true,

        });

    }



}