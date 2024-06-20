import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import {useFavContext} from "./utils/favs.context";
import "../../src/index.css";


const Card = ({ cart, setCart}) => {

  const {name, username, id} = cart;
  const { setFavourites } = useFavContext();

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
        <button onClick={() => setFavourites((prev) => [...prev, cart])} className="favButton">Add Fav</button>
    </div>
  );
};


export default Card;
