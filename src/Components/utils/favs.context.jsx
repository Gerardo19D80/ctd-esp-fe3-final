import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

const parseFav = JSON.parse(localStorage.getItem("favourites")) || [];

const Context = ({children}) => {
    const [favourites, setFavourites] = useState(parseFav);

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