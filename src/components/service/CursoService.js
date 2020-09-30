import axios from "axios";
import {restAPI} from "../_helpers/api.calls";
import { prettyDOM } from "@testing-library/react";
import { config } from "../../constants";
import { AuthenticationService } from "./AuthenticationService";

export default class CursoService {

  getAll() {
    return restAPI.get(`/api/cursos`).then((res) => res.data);
  }

  getAllDisponibles() {
    let yo = AuthenticationService.currentUser().entityId;
    return restAPI.get(`/api/estudiantes/${yo}/cursos?disponibles=true`).then((res) => res.data);
  }

  getMisCursos() {
    let yo = AuthenticationService.currentUser().entityId;
    return restAPI.get(`/api/estudiantes/${yo}/cursos`).then((res) => res.data);
  }

  postInscribirme(inscripcionInfo) {
    let yo = AuthenticationService.currentUser().entityId;
    return restAPI.post(`/api/estudiantes/${yo}/inscripciones`, inscripcionInfo).then((res) => res.data);
  }

}