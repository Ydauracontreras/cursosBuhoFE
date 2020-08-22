import React from 'react';
import HeaderPrueba from '../commons/header/header.jsx';
import Principal from '../inicio/Principal';
import FooterPrueba from '../commons/footer/footer';
import '../../assets/styles/App.css';
import CursosD from '../inicio/CursosDestacados';

const Home = () => {
  return (

    <div className='home-container'>
      <div className='header-content'>
        <HeaderPrueba />
      </div>
      <div className='imagen-principal-content'>
        <Principal />
      </div>
      <div className='cursos-destacados-content' >
        <CursosD/> 
        </div>
      <div className='footer-content' >
        <FooterPrueba/>
        </div>
    </div>

  );

};

export default Home;
