import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextGlobal from './Components/utils/global.context';
import Context from './Components/utils/favs.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <ContextGlobal>
        <Context>
          <App/>
        </Context>  
       </ContextGlobal>
    </BrowserRouter>
);

