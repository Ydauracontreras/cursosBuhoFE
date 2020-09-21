import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Categoria.css";
import Title from "../commons/title/Title";
import ProgramacionIcons from "../../assets/icons/pc.svg";

import CategoriaService from "../service/CategoriaService";
import PostIt from "../postIt/PostIt";
import Programacion from "../../assets/img/categoria-programacion.jpg";
import BuhoIcons from "../../assets/img/logo_buho.svg";
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
        <Title text="CATEGORIAS" />
        <div className="container-categoria-postit">
          <Grid container spacing={6}>
            {this.state.categorias.map((categoria) => (
              <article className="uno" key={categoria.id}>
                <PostIt
                  text={categoria.nombre}
                  icons={ProgramacionIcons}
                  categoria={Programacion}
                />
              </article>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
