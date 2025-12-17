import React from 'react'
import { ListaProductos } from '../ListProductos.js'
import { subCategorias,categorias } from '../../data/dataCategorias.js';
import { Link } from 'react-router-dom';



export const Menu = () => {


  return (
    <div className='menuPrincipal'>
      
 

      {subCategorias.map((categoria,index)=>{

          return(
            <div key={index} className='categoria'>

                <h2>{categorias[index]}</h2>
                

                <ListaProductos cat={categorias[index]}/>

                <h2 className='ver-mas'><Link to={'/menu/categorias/'+categorias[index]}>Ver mas ...</Link></h2>

            </div>
          )
      })}



      

    </div>

  )
}
