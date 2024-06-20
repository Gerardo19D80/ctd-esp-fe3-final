import React, { useReducer } from "react";
import { Link } from "react-router-dom";


const Card = ({ cart, setCart}) => {

  const {name, username, id} = cart;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <Link to={'/dentist/' + cart.id}>
            <img src="./images/doctor.jpg" alt="imagensinfoto" />
            <h4 style={{ textAlign: 'center' }}>{name}</h4>
        </Link>
        <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐️</button>
    </div>
  );
};


export default Card;
