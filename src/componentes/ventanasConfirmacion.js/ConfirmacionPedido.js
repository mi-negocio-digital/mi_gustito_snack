import React, { useContext } from 'react'
import { ContextoPedidos } from '../../helpers/ContextoPedidos'
import { ContextoMensajeConfirmacion } from '../../helpers/ContextoMensajeConfirmacion';

export const ConfirmacionPedido = ({titulo,mensaje}) => {


    const {mensajeConfirmacion,setMensajeConfirmacion} =useContext(ContextoMensajeConfirmacion);

    const {listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos);

    let suma=0;
   
  return (
        <div className='ventanaConfirmacion'>
        
        {(mensajeConfirmacion.seleccion===1 )&&(
            
               <section className='ticket'>

            <h3>{mensajeConfirmacion.titulo}</h3>
            <p>{mensajeConfirmacion.mensaje}</p>
           
                <span className='titulo-ticket'>

                    <p>Cantidad</p>
                    <p>Nombre</p>
                    <p>Subtotal</p>
                </span>

            {listadoPedidos.map((pedido, index)=>{
                          
                        {suma=suma+((pedido.datos.precio)*(pedido.cantidad))}
                            return(
            
                                <section  key={index} className='datos-ticket'>
                                    <p>{pedido.cantidad}</p>
                                    <p>{pedido.datos.nombre}</p>
                                    <p>${(pedido.datos.precio)*(pedido.cantidad)}</p>
                                    
                                </section>
            
                            )
                            
            
                            
            
                        })}

                        <h3>Total: ${suma}</h3>





            <button>Aceptar</button>
            <button onClick={()=>{ setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))}}>Cancelar</button>


        </section>
        )}


        {(mensajeConfirmacion.seleccion===2 )&&(

                           <section>

            <h3>{mensajeConfirmacion.titulo}</h3>
            <p>{mensajeConfirmacion.mensaje}</p>
           
           
            
                                <section className='pedido' >
            
                                   
                                    <h3>{mensajeConfirmacion.item[0].categoria}</h3>
                                    <hr/>
            
                                    <div className="datosPedido">
            
                                    <div className="mask">
                                        <img src={mensajeConfirmacion.item[0].src} 
                                        alt={'1'}></img>
                                    </div>
            
                                    <div className="datosPedido2">
            
                                    <h2> {mensajeConfirmacion.item[0].nombre}</h2>
            
                      
            
                                    </div>
            
                                     <span>
                                        {"$"+(mensajeConfirmacion.item[0].precio)}
                                     </span>

                                            tamaño:
                                       {mensajeConfirmacion.item.map((data,index)=>{
                                               
                                               return(

                                                <div key={index}>

                                                <p>{data.tamano}</p>  
                                                </div>
                                              
                                               )
                                                
                                        })}

                                     
            
                                     </div>
            
            
            
                                    
            
            
                                </section>
            
                            
            
                            
            
                      



            <button>Aceptar</button>
            <button onClick={()=>{ setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))}}>Cancelar</button>


        </section>

        )}

        
        
        </div>
  )
}
