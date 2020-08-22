import axios from "axios";

export default class EmpleadoService {
  baseUrl = "http://localhost:8080/categorias/";

  getAll() {
    return axios.get(this.baseUrl).then((res) => res.data);
  }

}