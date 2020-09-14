import React, { Component } from "react";
import CategoriaService from "../service/CategoriaService";

class Categoria extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      categorias: {},
    };
    this.categoriaService = new CategoriaService();
  }

  componentDidMount() {
    this.categoriaService
      .getAll()
      .then((data) => {
        console.log(data);
        this.setState({ categorias: data });
      }
      );
  }

  renderCategorias() {
    return this.state.categorias.map((categoria) => {
      return (
        <tr key={categoria.id}>
          <td>{categoria.nombre}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-categoria">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>{this.renderCategorias}</tbody>
        </table>
      </div>
    );
  }
}
export default Categoria;
