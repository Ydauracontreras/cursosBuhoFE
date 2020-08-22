import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import Home from './components/Home/Home';
import PerfilEstudiante from './components/estudiante/PerfilEstudiante';
import Categoria from './components/categorias/Categoria';
import NotFound from './components/NotFound';
import Registro from './components/modales/registro/Registro.js';
import LoginPage from './components/login/LoginPage';

const Routes = () => {
  
    const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path='/' component={Home} />
        <Route exact path='/estudiantes' component={PerfilEstudiante} />
        <Route exact path='/categorias' component={Categoria} />
        <Route exact path ='/register' component={Registro}/>
        <Route exact path="/loginpage" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
};
export default Routes;
