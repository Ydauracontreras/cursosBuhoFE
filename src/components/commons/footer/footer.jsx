import React from 'react';
import Buho from '../../../assets/img/logo_buho.svg';
import './footer.css';


const FooterPrueba = () => {

    return (

        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-columns'>
                    <div className='logo-footer'>
                    <img className='logo-buho' src={Buho} alt="pinturillo" />
                    </div>
<div className='footer-column-One'>
    <ul className='footer-ul'>
        <li>
        <a href='/'>Inicio</a>
        </li>
        <li>
        <a href='/'>Quienes Somos</a>
        </li>
        <li>
        <a href='/'>Terminos y Condiciones</a>
        </li>
        <li>
        <a href='/'>Trabaja con nosotros</a>
        </li>
       
    </ul>
    </div>
    <div className='footer-column-Two'>
    <ul className='footer-ul'>
        <li>
        <a href='/'>Mapa del sitio</a>
        </li>
        <li>
        <a href='/'>Docentes</a>
        </li>
        <li>
        <a href='/'>Egresados</a>
        </li>
        <li>
        <a href='/'>Contacto</a>
        </li>
       
    </ul>

</div>

                </div>

            </div>
            
        </div>
    )
};

export default FooterPrueba;