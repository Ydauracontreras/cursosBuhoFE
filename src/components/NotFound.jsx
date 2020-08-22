import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className='NotFound'>
    <h1>404: Not Found</h1>
    <h2>
      Regresa al
      <Link className='a' to='/'>Home</Link>
    </h2>
  </section>

);

export default NotFound;
