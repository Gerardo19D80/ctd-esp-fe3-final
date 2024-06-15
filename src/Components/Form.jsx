import React, { useState } from "react";
import "../../src/index.css";
import Respuesta from "./Respuesta";
import Error from "./Error";

const Form = () => {

  const [paciente, setPaciente] = useState({
    nombre: '',
    email:'',
    consulta:'',
  }) 
  
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) => setPaciente({ ...paciente, nombre: event.target.value });
  const handleEmail = (event) => setPaciente({ ...paciente, email: event.target.value });
  const handleConsulta = (event) => setPaciente({ ...paciente, consulta: event.target.value });

  const handleSubmit = (event) => {
      event.preventDefault();
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      
      if (paciente.nombre.trim().length > 5 && regex.test(paciente.email) && paciente.consulta.trim().length > 10){ 
        setShow(true);
        setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
  <>
  {show ? <Respuesta paciente={paciente}/> : (

    <form className='form'>
      <label>Nombre: </label>
      <input type="text" onBlur={handleName}/>
      <label>E-mail: </label>
      <input type="email" onBlur={handleEmail}/>
      <label>Consulta: </label>
      <textarea id="consulta" onBlur={handleConsulta} rows="4" cols="50"/>   
      <button onClick={handleSubmit} > Enviar </button>     
    </form> )
    
  }
    {error && <Error/>}

  </>
)
}

export default Form;
