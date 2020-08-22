import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

import 'primeflex/primeflex.css';
import '../Modales.css';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
        };
        this.items = [
            {
                label: 'Iniciar Sesion',
                command: () => { this.showSaveDialog() }
            },
        ]
    }


    render() {
        return (
            <div  >

                <a><Menubar model={this.items} /></a>
                <Dialog header="Registro" visible={this.state.visible} footer={this.footer} style={{ width: "30%", height: "50%" }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <form id="registro">

<div>
    <label className='Registro-label'>Usuario:</label>
    <input className='col-12'placeholder="Username"></input>

    <label className='Registro-label'>Contraseña:</label>
    <input className='col-12' placeholder="Password"></input>

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