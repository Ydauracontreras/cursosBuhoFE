import React, { Component } from 'react';
import CategoriaService from '../service/CategoriaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Categoria.css';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Categoria extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            categoria: {
            },
        };

        this.categoriaService = new CategoriaService();
    }

    componentDidMount() {
        this.categoriaService.getAll().then(data => this.setState({ categorias: data }))
    }


    render() {
        return (
            <div className="categoria-container" style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
                <DataTable value={this.state.categorias}>
                    <Column field="categoriaId" header="Categoria ID" />
                    <Column field="nombre" header="Nombre" />
                    <Column field="descripcion" header="Descrpcion" />
                </DataTable>
            </div>
        );
    }
}

export default Categoria;

