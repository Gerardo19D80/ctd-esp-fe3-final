import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import "../index.css";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [cart, setCart] = useState([]);
  const [doctores, setDoctores] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  //const url-2 = 'https://jsonplaceholder.typicode.com/users/:id'

  useEffect(() => {
    //manera #1 de hacer un fetch
    // fetch(url)
    // .then ((response) => { return response.json() })
    // .then ((data) => { 
    //     console.log(data);
    //     setDoctores(data);
    // })
    // .catch (err => console.log(err))
    
    //manera #2 de hacer un fetch con axios
    axios(url) 
        .then ((res) => setDoctores(res.data))
        .catch (err => console.log(err))

}, [])

  return (
    <main className="" >

      <h1> Selecciona a tu profesional: </h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        
        {doctores.map((doctor) => 
        <Card cart={doctor} key={doctor.id} setCart={setCart}/>
        )}
      </div>
    </main>
  )
}

export default Home