/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from "react";
import Categorias from "../categorias/Categoria";

import "./CursosDestacados.css";

/* import postitAmarillo from '../../assets/img/pos_amarillo.svg';
 import postitAzul from '../../assets/img/posAzul.svg';
 import posFucsia from '../../assets/img/posFucsia.svg';
 import posVerde from '../../assets/img/posVerde.svg';*/

const CursosD = () => {
  return (
    <div className="categorias-destacadas">
      <div className="catDes-titulo">
        <h1>
          Categorias Destacadas
          </h1>      </div>
      <Categorias />
    </div>
  );
};

export default CursosD;
