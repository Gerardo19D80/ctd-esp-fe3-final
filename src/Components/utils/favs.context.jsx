import { createContext, useContext, useState, useEffect, useReducer } from "react";

const FavContext = createContext();

const parseFav = JSON.parse(localStorage.getItem("favourites")) || [];

const reducer = (state, action) =>{
    switch(action.type){
        case "ADD_FAV":
            return {...state, favourites: [...state.favourites, action.payload]};
        case "DELETE_FAV":
            const filterFav = state.favourites.filter((item) => item.id !== action.payload.id);
            return {...state, favourites: filterFav}; 
        default:
            throw new Error ('No se pudo modificar el estado')
    }
}

const initialState ={
    favourites: parseFav,
};

const Context = ({children}) => {
    //const [favourites, setFavourites] = useState(parseFav);
    const [state, dispatch] = useReducer(reducer, initialState);     
    

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
    }, [state.favourites]);

return (
    <FavContext.Provider value={{ state, dispatch }}>
        {children}
    </FavContext.Provider>
)

}

export default Context

export const useFavContext = () => useContext(FavContext);