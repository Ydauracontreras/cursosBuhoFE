import React from 'react';
import imagenPrincipal from '../../assets/img/imagen_principal.jpg';
import flecha from '../../assets/img/flecha.png';
import postitAmarillo from '../../assets/img/pos.svg';
// import postitAzul from '../../assets/img/posAzul.svg';

import './Principal.css';


const Principal = () => {
    return (




        <div className='principal-container' >
            <div className='principal-content'>
                <div className='principal-imagen'>
                    <img className='imagen-estudiantes-principal' src={imagenPrincipal} alt='imagen-curso-estudiantes' />
                </div>
                <div className='principal-postit'>

                    <ul>
                        
                    <li>
                       <img className= 'principal-imagen-postit-uno'src={postitAmarillo} /> 
                    </li>
                    <li>
                            <h1 className='titulo-postit-inicio'>Aprendamos Juntos</h1>
                        </li>
                        <li>
                       <img className= 'principal-imagen-postit-dos'src={postitAmarillo} /> 
                    </li>
                    
                    </ul>
                    

                </div>

            </div>

        </div>


    )
};

export default Principal;
