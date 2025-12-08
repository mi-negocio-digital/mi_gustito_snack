import React from 'react'
import "./ListaProductos.css"
import { dataProductos } from '../data/dataProductos'

export const ListaProductos = ({limite}) => {
  return (
    <div className='lista-productos'>


  {  dataProductos.slice(limite-3,limite).map((data,index)=>{

        return(
            <section className='producto' key={index}>

                <div className='mask'>
                    <img src={data.src} alt={data.alt} ></img>
                </div>
                
                <h3>{data.nombre}</h3>
                <p>{data.descripcion}</p>
                <strong>{data.precio}</strong>


            </section>
        )
  })}





    </div>
  )
}
