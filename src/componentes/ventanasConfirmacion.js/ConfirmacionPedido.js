import React, { useContext, useEffect, useState } from 'react'
import { ContextoPedidos } from '../../helpers/ContextoPedidos'
import { ContextoMensajeConfirmacion } from '../../helpers/ContextoMensajeConfirmacion';
import { GuardarEnStorage } from '../../helpers/GuardarEnStorage';
import {EvitarRestrocederNavegador} from '../../helpers/EvitarRestrocederNavegador'

export const ConfirmacionPedido = ({titulo,mensaje}) => {


    const {mensajeConfirmacion,setMensajeConfirmacion} =useContext(ContextoMensajeConfirmacion);

    const {listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos);
    const [tamano,setTamano]=useState(0);
    const [tipo,setTipo]=useState(0);
    const [complemento,setComplemento]=useState(null);
    const [precioTotal, setPrecioTotal]=useState(null);
    const [activarVenta, setActivarVenta]=useState(false)

    useEffect(()=>{
        
        if(mensajeConfirmacion.seleccion===2||mensajeConfirmacion.seleccion===3){
                    setPrecioTotal(()=>((complemento!==null)?parseInt(mensajeConfirmacion.item[tamano][tipo].precio)
        +parseInt(mensajeConfirmacion.item[tamano][tipo].complemento[complemento].precio)
        :(mensajeConfirmacion.item[tamano][tipo].precio)
    ))
        }
            

    }, )

    useEffect(()=>{
        const horario = new Date().getHours();

        //14 a 22

        console.log(horario);

       if(horario< 23  && horario>=14) setActivarVenta(()=>(true));
      

        console.log(activarVenta)
    },[]);


    EvitarRestrocederNavegador();

    let suma=0;
    let mensajeProductos="";


    const productoIndividual=(e,cantidadTipo,cantidadTamano)=>{

        console.log(cantidadTamano)

       if(mensajeConfirmacion.seleccion===2) {
        const numeroTelefonico='5213318416848';
            //numero de usuario
            //modificacion
            //modificacion 2
            
        
        console.log("Pedir este producto");
        
        const message='Hola👋, quiero hacer una orden de:\n\n ';
        let mensajeItem="• "+e.nombre+"\n";
            mensajeItem=mensajeItem+" Ingredientes: "+e.ingredientes+"\n";
            if(cantidadTamano>1)
            mensajeItem=mensajeItem+" Tamaño: "+e.tamano+"\n";
            if(cantidadTipo>1)
            mensajeItem=mensajeItem+" de Tipo:"+e.tipo+"\n\n";
            
            if(e.complemento && complemento!==null){
                mensajeItem=mensajeItem+"Complemento: ("+e.complemento[complemento].nombre+"-$"+e.complemento[complemento].precio; 
                mensajeItem=mensajeItem+")\n\n 📍Total: $"+(parseInt(e.precio)+parseInt(e.complemento[complemento].precio));
            }
            else
            mensajeItem=mensajeItem+"Total: $"+e.precio;

        

         const url = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(message+mensajeItem)}`;
    window.open(url, "_blank"); }
    else if(mensajeConfirmacion.seleccion===3){



        //primero verificar si el producto existe

       try{
        let n= listadoPedidos.findIndex((n)=>n.datos.id===e.id && n.index_complemento===complemento);
        if(n===-1) throw "Crear nuevo item en pedido ya que no existe"

        const pedidos=JSON.parse(localStorage.getItem("pedidos"));
        
        const pedido={
           'id': pedidos[n].id,
           "datos": pedidos[n].datos,
           "cantidad":parseInt(pedidos[n].cantidad)+1,
           'index_complemento' : pedidos[n].index_complemento,
            'cantidad_tipo':pedido[n].cantidad_tipo,
            'cantidad_tamano':pedido[n].cantidad_tamano
        } ;


        pedidos[n]=pedido;

        localStorage.setItem("pedidos",JSON.stringify(pedidos));
        setListadoPedidos(()=>pedidos);
        
       }catch(error){
            console.log(error);

    let pedido;
   
        pedido={
    'id':new Date().getTime(),
    'datos':e,
    'cantidad':1,
    'index_complemento' :  complemento,
    'cantidad_tipo': cantidadTipo,
    'cantidad_tamano':cantidadTamano
        }



        setListadoPedidos((elementos)=>elementos!=null?[...elementos,pedido]:[pedido]);
  //aqui agregar el boton para cambiar a edicion
         GuardarEnStorage("pedidos",pedido);
       }


        console.log("Agregar al carrito");

        

/*
          const pedido={
    'id':new Date().getTime(),
    'datos':e,
    'cantidad':1
    
  }

 

  setListadoPedidos((elementos)=>elementos!=null?[...elementos,pedido]:[pedido]);

  

  //aqui agregar el boton para cambiar a edicion

  GuardarEnStorage("pedidos",pedido);*/


    }
    setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))

    }

    const productoGrupos=()=>{

        console.log("Aqui se agrega los valores de la lista de pedidos para whatsapp");

        const numeroTelefonico='5213318416848';

        
        console.log("Pedir este producto");
        
        const message='Hola👋, quiero hacer una orden de: ';
           
        mensajeProductos=mensajeProductos+"\n\n\n📍Total: $"+suma+"";
        

         const url = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(message+mensajeProductos)}`;
    window.open(url, "_blank"); 
     

    setMensajeConfirmacion({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            })

            localStorage.setItem("pedidos",JSON.stringify([]));

            setListadoPedidos([]);

    }

    const productoCarrito=()=>{

    }
    
    console.log(activarVenta)
   
  return (

        <div className='ventanaConfirmacion'>

{ 

(activarVenta)?(
                <>
                

        {       
        (mensajeConfirmacion.seleccion===1 )&&(
            
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
                        // console.log(suma);
            
            mensajeProductos=mensajeProductos+"\n • ("+pedido.cantidad+")"+pedido.datos.nombre;
            
            
           if(pedido.cantidad_tipo>1)mensajeProductos=mensajeProductos+ "("+pedido.datos.tipo+")";

           if(pedido.cantidad_tamano>1) mensajeProductos=mensajeProductos+"\n Tamaño:"+pedido.datos.tamano;
            mensajeProductos=mensajeProductos+"\n Ingredientes: "+pedido.datos.ingredientes+"\n";
            
            
            if(pedido.index_complemento!==null){
                mensajeProductos=mensajeProductos
                +"Complemento: ("+pedido.datos.complemento[pedido.index_complemento].nombre+" + $"
                +pedido.datos.complemento[pedido.index_complemento].precio+")\n"; 
                suma=suma+((pedido.datos.complemento[pedido.index_complemento].precio)*(pedido.cantidad));
                //console.log((pedido.datos.complemento[pedido.index_complemento].precio));
                
            }
            mensajeProductos=mensajeProductos+"$"+pedido.datos.precio+"\n";
            console.log(mensajeProductos);
            
                            return(
            
                                <section  key={index} className='datos-ticket'>
                                    <span>
                                    <p>{pedido.cantidad}</p>
                                    <p>{pedido.datos.nombre} {pedido.cantidad_tipo>1&&"("+pedido.datos.tipo +")"}</p>
                                    <p style={{color:"#058288"}}>${(pedido.datos.precio)*(pedido.cantidad)}</p>
                                    </span>
                                    

                                   {(pedido.index_complemento!==null)&&(
                                    <span> 
                                        <p style={{color:"#bbb"}}>{pedido.cantidad}</p>
                                        <p style={{color:"#bbb"}}>Complemento: {pedido.datos.complemento[pedido.index_complemento].nombre}</p>
                                        <p style={{color:"#058288"}}>${pedido.datos.complemento[pedido.index_complemento].precio*pedido.cantidad}</p>

                                        
                                     </span>
                                   )} 
                                    
                                </section>
            
                            )
                            
            
                            
            
                        })}

                        <h3>Total: ${suma}</h3>





            <button className='button' onClick={()=>productoGrupos()} >Aceptar</button>
            <button className='button' onClick={()=>{ setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))}}>Cancelar</button>


        </section>
        )}


        {((mensajeConfirmacion.seleccion===2) ||(mensajeConfirmacion.seleccion===3))&&(

        <section className='base_ventana'>

            <h3>{mensajeConfirmacion.titulo}</h3>
            <p>{mensajeConfirmacion.mensaje}</p>
           
           
            
                                <section className='pedido' >
            
                                   
                                    <h3>{mensajeConfirmacion.item[tamano][tipo].categoria}</h3>
                                    <hr/>
            
                                    <div className="datosPedido">
            
                                    <div className="mask">
                                        <img src={mensajeConfirmacion.item[tamano][tipo].src} 
                                        alt={'1'}></img>
                                    </div>
            
                                    <div className="datosPedido2">
            
                                    <h2> {mensajeConfirmacion.item[tamano][tipo].nombre}</h2>
            
                                      { /* Tamaño:*/}
                                        <span className='posicionButton'>
                                    {
                                       
                                    ( !(mensajeConfirmacion.item.length<=1))&&(
                                        
                                        mensajeConfirmacion.item.map((data,index)=>{
                                       
                                            return(
                                                
                                        <button key={index} className={ tamano===index?"button_active":"button_not_active"} onClick={()=>setTamano(index)}>{data[tipo].tamano}</button>
                                        
                                   
                                            )
                                    })
                                )
                                    }
                                     </span>
                                   { /* Tipo:*/}
                                    <span className='posicionButton'>

                                    
                                    {(!(mensajeConfirmacion.item[tamano].length<=1))&&(  
                                        mensajeConfirmacion.item[tamano].map((data,index)=>{

                                           return(
                                             <button key={index} className={ tipo===index?"button_active":"button_not_active"} onClick={()=>setTipo(index)}>{data.tipo}</button>
                                            
                                           )

                                        })

                                    )}</span>

                                        

                                    {
                                        mensajeConfirmacion.item[tamano][tipo].complemento?(
                                            
                                              mensajeConfirmacion.item[tamano][tipo].complemento.map((data,index)=>{

                                            return(
                                                <span className='base_complemento' key={index}>
                                                    
                                                    <p>{data.nombre} ${data.precio}</p> 
                                                    <span className={complemento===index
                                                        ?"complemento complemento_activado"
                                                        :"complemento complemento_no_activado"}
                                                        onClick={()=>complemento===index?setComplemento(null):setComplemento(index)}
                                                        ></span>
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
            
                                     <span>
                                        {"$"+ 
                                        precioTotal
                                       /* (mensajeConfirmacion.item[tamano][tipo].precio)*/
                                        
                                        

                                        }
                                     </span>

                                          

                                     
            
                                     </div>
            
            
            
                                    
            
            
                                </section>
            
                            
            
                            
            
                      



            <button style={{background:"#ef823a"}} className='button' onClick={
            ()=>productoIndividual(mensajeConfirmacion.item[tamano][tipo],mensajeConfirmacion.item[tamano].length,mensajeConfirmacion.item.length)}>{mensajeConfirmacion.seleccion===2?"Aceptar":"Agregar al Carrito"}</button>

            <button style={{background:"#ef823a"}} className='button' onClick={()=>{ setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))}}>Cancelar</button>


        </section>

        )}


                </>
            ):(<div style={{
                background:"#fff",
                padding:"1rem"
                
                }}  className='base_ventana'>

                <div className='pedido'>

                                    <h2>Horiario de Atención </h2>

                <h3>Horario de Envío</h3>
                <p style={{color:"#ff0000"}}>2pm - 10pm</p>

                <h3>Horario de Surcursal</h3>
                <p>Domingo a Jueves: 1:30pm - 10:30pm</p>
                <p>Viernes y Sabado: 1:30pm - 11:30pm</p>

                <p>Por el momento la sucursal se encuentra cerrada.</p>
                </div>

                

            </div>)
            
            }
        
        
        </div>
  )
}
