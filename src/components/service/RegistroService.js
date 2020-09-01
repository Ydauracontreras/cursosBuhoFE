import axios from "axios";

export default class RegistroService {
  baseUrl = "http://localhost:8080/api/auth/register";

  save(usuario) {
    return axios.post(this.baseUrl, usuario).then((res) => res.data);
  }
}
