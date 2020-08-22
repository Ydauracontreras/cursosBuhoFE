import 'primeicons/primeicons.css';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../components/modales/Modales.css';

import React, {Component} from 'react';
import {RadioButton} from 'primereact/radiobutton';

export class RadioButtons extends Component {

    constructor() {
        super();
        this.state = {
            city: null
        };
    }
    render() {
        return (
            <div>
                <div className="p-grid" style={{width:'250px',marginBottom:'10px'}}>
                    <div className="p-col-6">
                        <RadioButton inputId="rb1" name="tipoUsuario" value="Docente" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Docente'} />
                        <label htmlFor="rb1" className="p-radiobutton-label">Docente</label>
                    </div>
                    <div className="p-col-6">
                        <RadioButton inputId="rb2" name="tipoUsuario" value="Estudiante" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Estudiante'} />
                        <label htmlFor="rb2" className="p-radiobutton-label">Estudiante</label>
                    </div>
                    </div>
                    </div>
                    );
                    }
                    }

                    
