// Constants.js Constantes de la aplicacion
//production
const prod = {
  url: {
    API_BASE_URL: "https://cursos-api-app.herokuapp.com",
  },
};
//development
const dev = {
  url: {
    API_BASE_URL: " https://qdemy.herokuapp.com/",
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
