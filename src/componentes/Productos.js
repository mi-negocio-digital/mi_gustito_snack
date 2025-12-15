import React, { useContext,useState } from 'react'
import { ContextoPedidos } from '../helpers/ContextoPedidos'
import { useParams } from 'react-router-dom'
import { dataProductos } from '../data/dataProductos';
import { Error404 } from './body/Error404';

export const Productos = () => {

const parm=useParams();

    const [tamano,setTamano]=useState(0);
    const [tipo,setTipo]=useState(0);
     const [complemento,setComplemento]=useState(null);
    const [precioTotal, setPrecioTotal]=useState(null);



let producto = dataProductos.find(n=> n[0][0].nombre===parm.id);

console.log(producto);


  return !producto?(

    
    <div className='ErrorProducto'>

        <Error404/>
    </div>
  ):(
        <div className='ventanaConfirmacion'>


           
           <section>
            
                                <section className='pedido' >
            
                                   
                                    <h3>{producto[tamano][tipo].categoria}</h3>
                                    <hr/>
            
                                    <div className="datosPedido">
            
                                    <div className="mask">
                                        <img src={producto[tamano][tipo].src} 
                                        alt={'1'}></img>
                                    </div>
            
                                    <div className="datosPedido2">
            
                                    <h2> {producto[tamano][tipo].nombre}</h2>
                                    <p>Descripcion: {producto[tamano][tipo].descripcion}</p>
            
                                        Tamaño:
                                        <span className='posicionButton'>
                                     
                                    {
                                       
                                    producto.map((data,index)=>{
                                        
                                            return(
                                                
                                        <button key={index} className={ tamano===index?"button_active":"button_not_active"} onClick={()=>setTamano(index)}>{data[tamano].tamano}</button>
                                        
                                   
                                            )
                                    })
                                    }
                                     </span>
                                    Tipo:
                                    <span className='posicionButton'>

                                    {
                                        producto[tamano].map((data,index)=>{

                                           return(
                                             <button key={index} className={ tipo===index?"button_active":"button_not_active"} onClick={()=>setTipo(index)}>{data.tipo}</button>
                                            
                                           )

                                        })

                                    }</span>

                                         <p>Ingredientes:  {producto[tamano][tipo].ingredientes}</p>

                                    {
                                        producto[tamano][tipo].complemento?(
                                            
                                              producto[tamano][tipo].complemento.map((data,index)=>{

                                            return(
                                                <span className='base_complemento' key={index}>
                                                    
                                                    <p>{data.nombre} ${data.precio}</p> 
                                                    
                                                </span>
                                            )
                                        })

                                        
                                        ):(
                                            <span>

                                            </span>
                                        )
                                        
                                      
                                      // console.log(mensajeConfirmacion.item[tamano][tipo].complemento[1].nombre)
                                    }
            
                                    </div>
            


                                          

                                     
            
                                     </div>
            
            
            
                                    
            
            
                                </section>
            
          </section>
            
                            
            
                      



           




        </div>
  )
}
