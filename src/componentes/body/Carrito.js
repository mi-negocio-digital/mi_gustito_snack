import { useContext, useEffect, useState } from "react"
import { ContextoPedidos } from "../../helpers/ContextoPedidos"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import { ConfirmacionPedido } from "../ventanasConfirmacion.js/ConfirmacionPedido"
import { ContextoMensajeConfirmacion } from "../../helpers/ContextoMensajeConfirmacion"
import { ComplementoPrueba } from "../ventanasConfirmacion.js/ComplementoPrueba"



export const Carrito = () => {

   

const { listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos)
const [totalProductos, setTotalProductos]=useState(0);
const [totalPrecio, setTotalPrecio]=useState(0);

const modificarTotalProductos=(n, lista,condicion)=>{

    n=0;

    lista.map((pedido)=>{
        if(condicion)
       { n=n+(pedido.cantidad);

       }
        else{ n=n+((pedido.cantidad)*(pedido.datos.precio));
          if(pedido.index_complemento!==null) {
            //console.log(pedido.datos.complemento[pedido.index_complemento].precio)
            n=n+((pedido.cantidad)*(pedido.datos.complemento[pedido.index_complemento].precio));}
        }
    })

    return n;

}

useEffect(()=>{
  
  if(listadoPedidos!==null){
    setTotalProductos((n)=>modificarTotalProductos(n,listadoPedidos,true));
    setTotalPrecio((n)=>modificarTotalProductos(n,listadoPedidos,false));}
},[])

const {mensajeConfirmacion,setMensajeConfirmacion} = useContext(ContextoMensajeConfirmacion);


const aumentarCarrito=(e)=>{





  const pedidosEditados= [...listadoPedidos];

   

  pedidosEditados[e]= {...pedidosEditados[e],cantidad:parseInt(pedidosEditados[e].cantidad)+1}//parseInt(pedidosEditados[e].cantidad)+1;

  console.log(pedidosEditados);

  localStorage.setItem("pedidos",JSON.stringify(pedidosEditados));

  setListadoPedidos(pedidosEditados);

  setTotalProductos((n)=>modificarTotalProductos(n,pedidosEditados,true));
  setTotalPrecio((n)=>modificarTotalProductos(n,pedidosEditados,false));


}

const decrementarCarrito=(e)=>{
  


  const pedidosEditados= [...listadoPedidos];

   
  if(pedidosEditados[e].cantidad!==1){
  pedidosEditados[e]= {...pedidosEditados[e],cantidad:parseInt(pedidosEditados[e].cantidad)-1}//parseInt(pedidosEditados[e].cantidad)+1;
    localStorage.setItem("pedidos",JSON.stringify(pedidosEditados));
  setListadoPedidos(pedidosEditados);
}else{
  const valor=pedidosEditados[e];
  const nuevaLista= pedidosEditados.filter(n=>n.id!==valor.id);
  console.log(nuevaLista);
    localStorage.setItem("pedidos",JSON.stringify(nuevaLista));
  setListadoPedidos(nuevaLista);
}


setTotalProductos((n)=>modificarTotalProductos(n,pedidosEditados,true));
setTotalPrecio((n)=>modificarTotalProductos(n,pedidosEditados,false));



}


const confirmacion=()=>{



    const datosMensaje={
      'valor':1,
      'seleccion':1,
      'item':null,
      'titulo':'Pedido Organizado',
      'mensaje':'¿Deseas Continuar? Revisa tu pedido para ver que este todo en orden.'
    }
  setMensajeConfirmacion(datosMensaje);


   

}
    


  return (

    <div className="seccionCarrito">
          {listadoPedidos && listadoPedidos.length>0 ?  
          <div className='carritoPedido'>

            <div className="pedidos">

             

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
                        {pedido.index_complemento!==null &&<span style={{color:"#ddd"}}>
                                      
                                     
                                        <p>complemento: {pedido.datos.complemento[pedido.index_complemento].nombre}</p>
                                  {(pedido.datos.complemento[pedido.index_complemento].precio)>0 &&(
                                    <p>${pedido.datos.complemento[pedido.index_complemento].precio*pedido.cantidad}</p>
                                  ) }      
                          </span>}

                        <span>
                        <BsArrowLeftCircleFill className="arrowCarrito" onClick={()=>decrementarCarrito(index)}/>
                       {pedido.cantidad}
                        <BsArrowRightCircleFill className="arrowCarrito" onClick={()=>aumentarCarrito(index)}/>
                        </span>

                        </div>

                         <span>
                            {
                              (pedido.index_complemento===null)?
                            "$"+(pedido.datos.precio)*(pedido.cantidad)
                            :"$"+(parseInt((pedido.datos.precio)*(pedido.cantidad))
                            +parseInt((pedido.datos.complemento[pedido.index_complemento].precio)*(pedido.cantidad)))
                            }
                         </span>

                         </div>



                        


                    </section>

                )

                

            })}

            </div>

            

            <div className="resumenCompra">

                <h3>Resumen de compra</h3>

                <span>Total productos: {totalProductos}  </span>

                <h2>Total: ${totalPrecio}</h2>

                <button onClick={()=>confirmacion()}>Generar Compra</button>

            </div>



    
    
    </div>
    :<div className='noCarritoPedido'>
    
        <h1>No hay pedidos en el carrito</h1>
    </div>
}





  
    </div>

  
  
  )
}
