import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./components/Home/Home";
import PerfilEstudiante from "./components/estudiante/PerfilEstudiante";
import Categoria from "./components/categorias/Categoria";
import NotFound from "./components/NotFound";
import Registro from "./components/modales/registro/Registro.js";
import Curso from "./components/Cursos/Curso";
import RegistroPage from "./components/registro/Registro";

const Routes = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/estudiantes" component={PerfilEstudiante} />
        <Route exact path="/categorias" component={Categoria} />
        <Route exact path="/categorias/cursos" component={Curso} />
        <Route exact path="/register" component={Registro} />
        <Route exact path="/registroPage" component={RegistroPage} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
