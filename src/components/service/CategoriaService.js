import axios from "axios";

export default class CategoriaService {
  baseUrl = " https://cursos-api-app.herokuapp.com/api/categorias";

  getAll() {
    return axios.get(this.baseUrl).then((res) => res.data);
  }
}
