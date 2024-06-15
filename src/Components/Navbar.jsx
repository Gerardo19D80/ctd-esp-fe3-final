import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { routes } from './utils/routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {



  return (
    <nav className = "nav">
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <img src="./images/LOGO.png" alt="logo" />
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Mis Favoritos</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>🌗</button>
    
    </nav>
  )
}

export default Navbar