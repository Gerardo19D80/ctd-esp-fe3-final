import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import {useFavContext} from "./utils/favs.context";
import "../../src/index.css";


const Card = ({ cart }) => {

  const {name, username, id} = cart;
  const { state, dispatch } = useFavContext();

  //el metodo findFav va a guardar en la variable un solo objeto
  const findFav = state.favourites.find((item) => cart.id === item.id )
  console.log (findFav);

  const addFav = ()=>{
    if (findFav) {
      dispatch({type: "DELETE_FAV", payload: cart})
    } else {
      dispatch({type: "ADD_FAV", payload: cart }) 
    } 
  };

  return (
    <div className="card">
        <Link to={'/dentist/' + cart.id}>
            <img src="./images/doctor.jpg" alt="imagensinfoto" />
            <h4 style={{ textAlign: 'center' }}>{name}</h4>
        </Link>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">
          {findFav ? "Quitar de favoritos" : "Agregar a Favoritos"}
          </button>
    </div>
  );
};


export default Card;
