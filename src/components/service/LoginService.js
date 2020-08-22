import axios from "axios";

const API_URL = "https://cursos-api-app.herokuapp.com/api/auth/";

class LoginService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
}

export default new LoginService();