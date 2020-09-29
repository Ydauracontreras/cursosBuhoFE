import React, { Component, useState } from "react";
import "./Categoria.css";
import CategoriaService from "../service/CategoriaService";
import PostIt from "../postIt/PostIt";

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
        <div className="container-categoria">
          <div className="container">
            {this.state.categorias.map((categoria) => {
              return (
                <PostIt
                  nombreDelProducto={categoria.nombre}
                  img={categoria.imagen}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
