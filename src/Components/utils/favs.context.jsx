import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

//const lsFavourites = JSON.parse(localStorage.getItem("favourites"));

const Context = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

return (
    <FavContext.Provider value={{ favourites, setFavourites }}>
        {children}
    </FavContext.Provider>
)

}

export default Context

export const useFavContext = () => useContext(FavContext);