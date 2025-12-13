import React from 'react'
import { ListaProductos } from '../../ListProductos'
import { dataProductos } from '../../../data/dataProductos'

export const MasComprado = () => {
  return (
    <div className='masComprado'>
        
        <h3>Productos Mas comprados</h3>

        <ListaProductos limite={dataProductos.length} cat={'masComprado'}/>
        
    </div>
  )
}
