import React, { Component, useState } from "react";
import "./Categoria.css";
import CategoriaService from "../service/CategoriaService";
import Categorias from "../categoriasCard/Categorias";
import "primeflex/primeflex.css";
import Header from "../commons/header/header";

export default class Categoria extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      categorias: [],
    };
    this.categoriaService = new CategoriaService();
  }

  componentDidMount() {
    this.categoriaService
      .getAll()
      .then((data) => this.setState({ categorias: data }));
  }

  render() {
    return (
      <div className="container-categoria">
        <Header />
        <div className="p-grid">
          {this.state.categorias.map((categoria) => {
            return (
              <div className="p-col-12 p-md-6 p-lg-3">
                <Categorias
                  img={categoria.imagen}
                  nombreCategoria={categoria.nombre}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
