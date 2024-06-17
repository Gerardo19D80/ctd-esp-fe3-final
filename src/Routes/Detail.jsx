import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [data, setData] = useState([])

  const params = useParams();
  const urlDetail = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(urlDetail).then((res) => setData(res.data)); 
  }, []);

  return (
    <>
    <section className='detail'>
      <h2>{data.name} matricula nro. : 1400-{data.id} </h2>
      <p>Nombre Completo: {data.name}, {data.username}</p>
      <p>E-mail: <a>{data.email}</a></p>
      <p>Telefono: {data.phone}</p>
      <p>Sitio Web: <a>{data.website}</a></p>
    </section>
   
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail