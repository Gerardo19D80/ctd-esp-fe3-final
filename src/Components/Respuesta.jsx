import React from 'react'

const Respuesta = ({paciente}) => {

    const{nombre, email} = paciente

  return (
    <>
    <h4>Muchas gracias {nombre} por su consulta</h4>
    <h5>En breve nos estaremos comunicando con usted a {email}</h5>
    </>
  )
}

export default Respuesta