import React from 'react'
import { useParams } from 'react-router-dom'
import { categorias, subCategorias } from '../../../data/dataCategorias';
import { ListaProductos } from '../../ListProductos';

export const Categorias = () => {

    const parm=useParams();
    

    const index= categorias.indexOf(parm.id)

    
  return (


    <div className='menu'>
      { /* <h1>{parm.id}</h1>*/}

        

             {subCategorias[index].map((subCategorias,n)=>{

                
       
                 return(
                   <div key={n} className='categoria'>
       
                      <h2>{subCategorias}</h2>
                       
                       
                       <ListaProductos cat={categorias[index]} subCat={subCategorias}/>
       

       
                   </div>
                 )
             })}



    </div>
  )
}
