import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {modoOscuro, setModoOscuro} = useContextGlobal();

  const toogleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  }

  return (
    <nav className = {`nav ${modoOscuro ? "dark" : ""}`}>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <h2 style={{color: 'red'}}>DH <a href={routes.home}>ODONTO</a></h2>
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Mis Favoritos</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toogleModoOscuro}>
      {modoOscuro ? "Light Mode" : "Dark Mode"}
      </button>
    
    </nav>
  )
}

export default Navbar