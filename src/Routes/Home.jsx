import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import "../index.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const [cart, setCart] = useState([]);
  const [doctores, setDoctores] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  
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
  
        {doctores.map((doctor) => 
        <Card cart={doctor} key={doctor.id} setCart={setCart}/>
          )}
      </div>
    </main>
  )
}

export default Home