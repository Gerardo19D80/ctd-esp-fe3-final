import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Quiere saber mas?</h2>
      <h2>Dejenos un mensaje y lo estaremos contactando a la brevedad</h2>
      <Form/>
    </div>
  )
}

export default Contact