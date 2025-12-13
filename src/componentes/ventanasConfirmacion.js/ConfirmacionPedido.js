import React, { useContext } from 'react'
import { ContextoPedidos } from '../../helpers/ContextoPedidos'
import { ContextoMensajeConfirmacion } from '../../helpers/ContextoMensajeConfirmacion';

export const ConfirmacionPedido = ({titulo,mensaje}) => {


    const {mensajeConfirmacion,setMensajeConfirmacion} =useContext(ContextoMensajeConfirmacion);

    const {listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos);

   
  return (
        <div className='ventanaConfirmacion'>
        
        {(mensajeConfirmacion.seleccion===1 )&&(
            
               <section>

            <h3>{mensajeConfirmacion.titulo}</h3>
            <p>{mensajeConfirmacion.mensaje}</p>
           


            {listadoPedidos.map((pedido, index)=>{
                          
            
                            return(
            
                                <section className='pedido' key={index}>
            
                                    <h3>{pedido.datos.categoria}</h3>
                                    <hr/>
            
                                    <div className="datosPedido">
            
                                    <div className="mask">
                                        <img src={pedido.datos.src} alt={pedido.id}></img>
                                    </div>
            
                                    <div className="datosPedido2">
            
                                    <h2> {pedido.datos.nombre}</h2>
            
                                    <span>
                            {"Cantidad: "+pedido.cantidad}
                            </span>
            
                                    </div>
            
                                     <span>
                                        {"$"+(pedido.datos.precio)*(pedido.cantidad)}
                                     </span>
            
                                     </div>
            
            
            
                                    
            
            
                                </section>
            
                            )
            
                            
            
                        })}



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
            
                                   
                                    <h3>{mensajeConfirmacion.item.categoria}</h3>
                                    <hr/>
            
                                    <div className="datosPedido">
            
                                    <div className="mask">
                                        <img src={mensajeConfirmacion.item.src} 
                                        alt={'1'}></img>
                                    </div>
            
                                    <div className="datosPedido2">
            
                                    <h2> {mensajeConfirmacion.item.nombre}</h2>
            
                      
            
                                    </div>
            
                                     <span>
                                        {"$"+(mensajeConfirmacion.item.precio)}
                                     </span>
            
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
