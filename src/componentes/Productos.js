import React, { useContext } from 'react'
import { ContextoPedidos } from '../helpers/ContextoPedidos'
import { useParams } from 'react-router-dom'
import { dataProductos } from '../data/dataProductos';
import { Error404 } from './body/Error404';

export const Productos = () => {

const parm=useParams();



let producto = dataProductos.find(n=> n.nombre===parm.id);

console.log(producto);


  return !producto?(

    
    <div className='ErrorProducto'>

        <Error404/>
    </div>
  ):(
        <div className='DatoProducto'>

        <h1>{producto.nombre}</h1>

        <mask><img src={producto.src} alt={Date.now()}></img></mask>
        
        <h3>{producto.categoria}</h3>
        <hr style={{backgroundColor:'#ddd'}}></hr>
        <h2>${producto.precio}</h2>

        <p>{producto.descripcion}</p>

    </div>
  )
}
