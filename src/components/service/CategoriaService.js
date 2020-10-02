import axios from "axios";
import { restAPI } from "../_helpers/api.calls";
import { prettyDOM } from "@testing-library/react";
import { config } from "../../constants";

export default class CategoriaService {
  getAll() {
    return restAPI.get("/api/categorias").then((res) => res.data);
  }
}
