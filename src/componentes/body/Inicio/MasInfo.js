import React from 'react'
import { Link } from 'react-router-dom'

export const MasInfo = () => {
  return (
    <div className='masInfo'>
        {/*Aqui hacer la recomendacion a acceder al menu, contacto y o quienes somos*/}
        <h1>Mas Informacion</h1>

        <p>Revisa Todos Nuestros Productos Disponibles: </p>

        <Link className='button' to="/menu">OrdenaAqui!!!</Link>


        <p>Quienes somos???</p>

        <Link className='button' to="/quienes_somos">Aqui tendrás la respuesta</Link>

        <p></p>
    </div>
  )
}
