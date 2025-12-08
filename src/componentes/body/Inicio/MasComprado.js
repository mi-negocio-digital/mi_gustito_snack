import React from 'react'
import { ListaProductos } from '../../ListProductos'
import { dataProductos } from '../../../data/dataProductos'

export const MasComprado = () => {
  return (
    <div>
        
        <h3>Productos Mas comprados</h3>

        <ListaProductos limite={dataProductos.length}/>
        
    </div>
  )
}
