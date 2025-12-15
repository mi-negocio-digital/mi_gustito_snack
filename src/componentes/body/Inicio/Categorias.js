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

        

             {subCategorias[index].map((subCategorias,index)=>{

                
       
                 return(
                   <div key={index} className='categoria'>
       
                      <h2>{subCategorias}</h2>
                       
                        {console.log(subCategorias)}
                       <ListaProductos cat={categorias[index]} subCat={subCategorias}/>
       

       
                   </div>
                 )
             })}



    </div>
  )
}
