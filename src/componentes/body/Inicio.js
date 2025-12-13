import React from 'react'
import {Slogan} from './Inicio/Slogan'
import {Carrusel} from './Inicio/Carrusel'
import {Descripcion} from './Inicio/Descripcion'
import {MasComprado} from './Inicio/MasComprado'
import{MasInfo} from './Inicio/MasInfo'
export const Inicio = () => {
  return (
    <div className='inicio'>
      
      

      <Carrusel/>
      
      <Slogan/>
      <Descripcion/>

      

      <MasComprado/>

      <MasInfo/>
      
    </div>
  )
}
