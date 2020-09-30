import React,  { useState } from "react";
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
import GuardedRoute from "./GuardedRoute"

const Routes = () => {
  const history = useHistory();
  //HOOK para marcar si esta autentidado o no. https://es.reactjs.org/docs/hooks-state.html
  const[isAutheticated, setisAutheticated] = useState(false);
  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <GuardedRoute exact path="/estudiantes" component={PerfilEstudiante} auth={isAutheticated} />
        <GuardedRoute exact path="/categorias" component={Categoria} />
        <GuardedRoute exact path="/categorias/cursos" component={Curso} auth={isAutheticated}/>
        <Route exact path="/cursos" component={Curso} />
        <Route exact path="/register" component={Registro} />
        
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
