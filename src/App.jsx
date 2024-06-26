
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import "../src/index.css";
import { routes } from './Components/utils/routes';
import { useContextGlobal } from "./Components/utils/global.context";


function App() {

  const {modoOscuro} = useContextGlobal();

  return (
      <div className={`App ${modoOscuro ? 'dark' : ''}`}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.favs} element={<Favs />}/>
            <Route path={routes.contact} element={<Contact />}/>
            <Route path={routes.detail} element={<Detail />}/>
            <Route path="*" element={<h2 style={{textAlign: 'center', color:'red'}}>Error 404 - Page Not Found</h2>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
