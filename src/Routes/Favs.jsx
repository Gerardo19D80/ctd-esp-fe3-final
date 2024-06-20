import React from "react";
import Card from "../Components/Card";
import { useFavContext } from "../Components/utils/favs.context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favourites } = useFavContext();

  return (
    <>
      <h2>Mis Favoritos</h2>
      <div className="card-grid">
      {favourites.map((doctor) => <Card cart={doctor} key={doctor.id} />)}
      </div>
    </>
  )
};

export default Favs;
