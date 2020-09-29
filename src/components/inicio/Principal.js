import React from "react";
import imagenPrincipal from "../../assets/img/imagen_principal.jpg";

import "./Principal.css";

const Principal = () => {
  return (
    <div className="principal-container">
      <div className="principal-content">
        <div className="principal-imagen">
          <img
            className="imagen-estudiantes-principal"
            src={imagenPrincipal}
            alt="imagen-curso-estudiantes"
          />
        </div>
        <div className="principal-postit"></div>
      </div>
    </div>
  );
};

export default Principal;
