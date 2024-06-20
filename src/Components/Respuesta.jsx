import React from 'react'

const Respuesta = ({paciente}) => {

    const{nombre, email} = paciente

  return (
    <>
    <h4 style={{textAlign: 'center', color:'green'}}>Muchas gracias {nombre} por su consulta</h4>
    <h5 style={{textAlign: 'center', color:'green'}}>En breve nos estaremos comunicando con usted a {email}</h5>
    </>
  )
}

export default Respuesta