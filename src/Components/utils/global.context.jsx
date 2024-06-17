import { createContext, useContext, useState} from "react";

// este es el contexto creado
const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

  const [modoOscuro, setModoOscuro] = useState(false)

  return (
    <ContextGlobal.Provider value={{modoOscuro, setModoOscuro}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () =>{
  return useContext(ContextGlobal);
}