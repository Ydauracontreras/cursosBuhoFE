import React, { Component } from "react";
import { Dialog } from "primereact/dialog";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

import "primeflex/primeflex.css";
import "../Modales.css";
import { AuthenticationService } from "../../service/AuthenticationService";
import { AlertService } from "../../service/AlertService"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      usuario: {
        username: null,
        password: null
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
      AlertService.success('Ingresando!');
      this.setState({
        visible: false,
        usuario: {
          username: null,
          password: null
        },
      });
    });
  }


  render() {
    return (
      <div>
        <Menubar model={this.items} />
        <Dialog
          header="Registro"
          visible={this.state.visible}
          footer={this.footer}
          style={{ width: "30%", height: "50%" }}
          modal={true}
          onHide={() => this.setState({ visible: false })}
        >
          <div className="col-12">
            <form id="registro">
              <div className="form-group">
                <label className="Registro-label">Usuario:</label>
                <input className="col-12" placeholder="Username"
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
                <input className="col-12" type="password" placeholder="Password"
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
                Ingresaaaar!
          </button>
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
