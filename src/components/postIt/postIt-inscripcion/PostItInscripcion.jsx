import React, { useState } from "react";
import "../PostIt.css";
import "./PostItInscripcion.css";
import { Dialog } from "primereact/dialog";
import { AlertService } from "../../service/AlertService"
import CursoService from "../../service/CursoService";

const PostItInscripcion = ({ curso, categoria, icons, onInscribir }) => {

  const cursoService = new CursoService();
  const [comenzarPago, setComenzarPago] = useState(false);
  const [medioPago, setMedioPago] = useState("TARJETA");
  const [infoMedioPago, setInfoMedioPago] = useState("123");

  const pagar = () => {
    let inscripcionInfo = {
      cursoId: curso.cursoId,
      medioPago: medioPago,
      infoMedioPago: infoMedioPago
    }

  }

  const handleEvent = event => {

    onInscribir(event, curso);
  };

  return (
    <div className="container-green-postit">
      <div className="icos-postit-container">
        <img src={icons} alt="" />
      </div>

      <div className="img-categoria-container">
        <img src={categoria} alt=""></img>
      </div>
      <div className="title-postit-container">
        <h2>{curso.nombre} </h2>
      </div>
      <div className="title-postit-container">
        <h2>{curso.descripcion} </h2>
      </div>

      <button onClick={handleEvent}>
        Inscribite!
          </button>
      <div>

      </div>
    </div>
  );
};

export default PostItInscripcion;
