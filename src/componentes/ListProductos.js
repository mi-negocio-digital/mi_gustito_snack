import React, { useContext} from 'react'
import "./ListaProductos.css"
import { dataProductos } from '../data/dataProductos'
import { ContextoPedidos } from '../helpers/ContextoPedidos'
import {GuardarEnStorage} from '../helpers/GuardarEnStorage'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { ContextoMensajeConfirmacion } from '../helpers/ContextoMensajeConfirmacion'

export const ListaProductos = ({limite,cat,subCat}) => {





const{ listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos);

  


const agregarCarrito=(e,index,primerArreglo)=>{
  //crear el pedido
  console.log("AQUI "+listadoPedidos);
  

  const pedido={
    'id':index,
    'datos':e,
    'cantidad':1
  }

 

  setListadoPedidos((elementos)=>elementos!=null?[...elementos,pedido]:[pedido]);

  

  //aqui agregar el boton para cambiar a edicion

  GuardarEnStorage("pedidos",pedido);

  if(primerArreglo){

 primerArreglo= listadoPedidos.findIndex(e=>e.id===index);
  }



}

const {mensajeConfirmacion, setMensajeConfirmacion}=useContext(ContextoMensajeConfirmacion)

const pedirProductoIndividual=(e)=>{

      console.log(mensajeConfirmacion);

    const datosMensaje={
      'valor':1,
      'seleccion':2,
      'item': e,
      'titulo':'Producto Seleccionado',
      'mensaje':'¿Desear Pedir este producto?'
    }
  setMensajeConfirmacion(datosMensaje);

}


const aumentarCarrito=(e)=>{





  const pedidosEditados= [...listadoPedidos];

   

  pedidosEditados[e]= {...pedidosEditados[e],cantidad:parseInt(pedidosEditados[e].cantidad)+1}//parseInt(pedidosEditados[e].cantidad)+1;

  console.log(pedidosEditados);

  localStorage.setItem("pedidos",JSON.stringify(pedidosEditados));

  setListadoPedidos(pedidosEditados);


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




}


  return (
    <div className='lista-productos'>

 
  {  dataProductos.slice(limite-3,limite).map((data,index)=>{

    let seleccionado;
    
      if(listadoPedidos)
      {seleccionado= listadoPedidos.findIndex(e=>e.id===index);
      }
            
        return(
          
          <>
            {(cat===data.categoria || cat==='masComprado') &&
             
             (

              <>

              {
                (subCat)?
                <>

                      {data.subCategoria===subCat &&(
                             <section className='producto' >



                                  <div>
                    
                <div className='mask'>
                    <img src={data.src} alt={index} ></img>
                </div>
                
                <h3>{data.nombre}<span className='precio'>{"$"+data.precio}</span> 
                <span className='detalle' ><Link to={'/menu/'+data.nombre}>ver detalles  </Link></span></h3>

                
               {/* <p>{data.descripcion}</p>*/}
                
                

                <section>
                  <button className='pedido' onClick={()=>pedirProductoIndividual(data)}>Pedir este producto</button>


                  {
                   /* listadoPedidos?
                  //listadoPedidos.find(e=>e.id===index)
                  //?<span>{console.log("id del producto "+index)}</span>
                  //:<button className='carrito' onClick={()=> agregarCarrito(data,index)}>Agregar al Carrito</button>
                  //:<button className='carrito' onClick={()=> agregarCarrito(data,index)}>Agregar al Carrito</button>
                  */
                 (listadoPedidos && (seleccionado!==-1))?(
                  <section className='pedidoAgregado'> 

                    <BsArrowLeftCircleFill className='arrowProducto' onClick={()=>decrementarCarrito(seleccionado)}/>

                  
                     {listadoPedidos[seleccionado].cantidad}

                     <BsArrowRightCircleFill className='arrowProducto' onClick={()=>aumentarCarrito(seleccionado)}/>
                  
                  </section>
                  
                 )
                 :<button className='carrito' onClick={()=> agregarCarrito(data,index,seleccionado)}>Agregar al Carrito</button>

                  }
                  
                </section>


                  </div>
                



                              </section>
                      )}
                    
                   </>
                :
                              <section className='producto' >



                                  <div>
                    
                <div className='mask'>
                    <img src={data.src} alt={index} ></img>
                </div>
                
                <h3>{data.nombre}<span className='precio'>{"$"+data.precio}</span> 
                <span className='detalle' ><Link to={'/menu/'+data.nombre}>ver detalles  </Link></span></h3>

                
               {/* <p>{data.descripcion}</p>*/}
                
                

                <section>
                  <button className='pedido' onClick={()=>pedirProductoIndividual(data)}>Pedir este producto</button>


                  {
                   /* listadoPedidos?
                  //listadoPedidos.find(e=>e.id===index)
                  //?<span>{console.log("id del producto "+index)}</span>
                  //:<button className='carrito' onClick={()=> agregarCarrito(data,index)}>Agregar al Carrito</button>
                  //:<button className='carrito' onClick={()=> agregarCarrito(data,index)}>Agregar al Carrito</button>
                  */
                 (listadoPedidos && (seleccionado!==-1))?(
                  <section className='pedidoAgregado'> 

                    <BsArrowLeftCircleFill className='arrowProducto' onClick={()=>decrementarCarrito(seleccionado)}/>

                  
                     {listadoPedidos[seleccionado].cantidad}

                     <BsArrowRightCircleFill className='arrowProducto' onClick={()=>aumentarCarrito(seleccionado)}/>
                  
                  </section>
                  
                 )
                 :<button className='carrito' onClick={()=> agregarCarrito(data,index,seleccionado)}>Agregar al Carrito</button>

                  }
                  
                </section>


                  </div>
                



                              </section>
              }
              
              </>





            
            
          )

           
            
            
            }
            </>
        )
  })}





    </div>
  )
}
