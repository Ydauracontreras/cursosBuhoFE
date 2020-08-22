/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './PerfilEstudiante.css';
import { Nav } from 'react-bootstrap';
import userAvatar from '../../assets/icons/profile.svg';
import Users from '../../assets/icons/users.svg';
import User from '../../assets/icons/user.svg';
import Email from '../../assets/icons/email.svg';
import Delete from '../../assets/icons/delete.svg';
import Pago from '../../assets/icons/pago.svg';
import Programacion from '../../assets/img/curso-programacion.jpg';
import PosiT from '../../assets/img/pos.svg';

const PerfilEstudiante = () => {
  return (

    <div className='container-perfil-estudiante'>
      <div className='estudiate-general-perfil'>
        <div className='estudiate-img'>
          <img src={userAvatar} alt='imagen-estudiantes' />
          <Nav.Link href='/publicPerfil'>
            <img className='iconos' src={Users} alt='imagen-estudiantes' />
            Perfil Público
          </Nav.Link>
          <Nav.Link href='/miPerfil'>
            <img className='iconos' src={User} alt='imagen-estudiantes' />
            Mi perfil
          </Nav.Link>
          <Nav.Link href='/cuenta'>
            <img className='iconos' src={Email} alt='imagen-estudiantes' />
            Cuenta
          </Nav.Link>
          <Nav.Link href='/pago'>
            <img className='iconos' src={Pago} alt='imagen-estudiantes' />
            Metodos de Pago
          </Nav.Link>
          <Nav.Link href='/eliminarCuenta'>
            <img className='iconos' src={Delete} alt='imagen-estudiantes' />
            Cerrar cuenta
          </Nav.Link>
        </div>
      </div>
      <div className='estudiante-informacion'>
        <div className='estudiante-informacion-personal'>
          <h1>Perfil Personal</h1>
          <input type='text' placeholder='Nombre:' />
          <input type='text' placeholder='Correo:' />

          <input type='text' placeholder='Pais:' />
          <input type='text' placeholder='Documento:' />

          <input type='text' placeholder='Idioma:' />
          <input type='text' placeholder='Zona Horaria:' />

        </div>

      </div>

      <div className='curso-estudiante'>
        <h1>Cursos Inscriptos</h1>
        <div className='curso-inscripto'>
          <section style={{ backgroundImage: `url("${PosiT}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>
          <section style={{ backgroundImage: `url("${PosiT}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>
          <section style={{ backgroundImage: `url("${PosiT}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>
        </div>

      </div>

      <div className='curso-estudiante'>

        <h1>Cursos Inscriptos</h1>
        <div className='curso-inscripto'>
          <section style={{ background: '#EC7063' }}>
            <img src={Programacion} alt='imagen-cursos' />
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>

          <section style={{ background: '#17A589' }}>
            <img src={Programacion} alt='imagen-cursos' />
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>
          <section style={{ background: '#2E86C1 ' }}>
            <img src={Programacion} alt='imagen-cursos' />
            <label>Nombre:</label>
            <label>Profesor:</label>
            <label>Duracion:</label>
          </section>
        </div>

      </div>

    </div>

  );

};

export default PerfilEstudiante;
