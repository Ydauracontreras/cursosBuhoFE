import React, { Component } from "react";
import { Dialog } from "primereact/dialog";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";
import Image from 'react-bootstrap/Image';
import "./Login.css";
import "primeflex/primeflex.css";
import { AuthenticationService } from "../../service/AuthenticationService";
import { AlertService } from "../../service/AlertService";
import Logo from '../../../assets/img/buho.jpg'
import FB from '../../../assets/icons/facebook-square-brands.svg';
import Google from '../../../assets/icons/google-brands.svg';




export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      usuario: {
        username: null,
        password: null,
      },
    };
    this.login = this.login.bind(this);
    this.items = [
      {
        label: "Iniciar Sesion",
        command: () => {
          this.showLoginDialog();
        },
      },
    ];
  }

  login() {
    AuthenticationService.login(this.state.usuario).then((data) => {
      AlertService.success("Ingresar!");
      this.setState({
        visible: false,
        usuario: {
          username: null,
          password: null,
        },
      });
    });
  }

  render() {
    return (
      <div>
        <Menubar model={this.items} />
        <Dialog
          visible={this.state.visible}
          footer={this.footer}
          style={{ width: "30%", height: "50%", justifyContent: "center" }}
          modal={true}
          onHide={() => this.setState({ visible: false })}
        >
          <div className="col-12">
<div className="logo-modales">
            <Image  src={Logo} roundedCircle />
            </div>
            <h2>Iniciar Sesión</h2>

            <form id="registro">
              <div className="form-group">
                <label className="Registro-label">Usuario:</label>
                <input
                  className="col-12"
                  placeholder="Username"
                  onChange={(e) => {
                    let val = e.target.value;
                    this.setState((prevState) => {
                      let usuario = Object.assign({}, prevState.usuario);
                      usuario.username = val;
                      return { usuario };
                    });
                  }}
                ></input>
              </div>
              <div className="form-group">
                <label className="Registro-label">Contraseña:</label>
                <input
                  className="col-12"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    let val = e.target.value;
                    this.setState((prevState) => {
                      let usuario = Object.assign({}, prevState.usuario);
                      usuario.password = val;
                      return { usuario };
                    });
                  }}
                ></input>
              </div>
            </form>
            <div className="form-group">
              <button className="Boton-registro" onClick={this.login}>
                Ingresar!
              </button>
            </div>
            <div className="check-terminos">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                <label class="custom-control-label" for="defaultUnchecked">Recuerdame</label>

              </div>

              <div className="login-options-container">

                <div className="login-register">
                  <p >____________________________</p><br></br>
                  <p >Ó inicia sesion con:</p><br></br>
                  <div className="logo-fb-google">
            <Image  src={FB} className="fb" />
            <Image  src={Google}  className="google"/>
            </div>

                </div>
              </div>
            </div>
          </div>
        </Dialog>
        {/* <Growl ref={(el) => this.growl = el} /> */}


      </div>


    );
  }

  showLoginDialog() {
    this.setState({
      visible: true,
    });
  }
}


