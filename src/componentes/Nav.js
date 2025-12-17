
import { NavLink } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart,FaBars } from "react-icons/fa";
import { Head } from './Head';
import { ContextoPedidos } from '../helpers/ContextoPedidos'
export const Nav = () => {



      const {listadoPedidos,setListadoPedidos}=useContext(ContextoPedidos);
      const [cantidadProductos, setCantidadProductos]=useState(0);
      const [mostrarLista, setMostrarLista]=useState(false);

    

  useEffect(()=>{
   
    let contadorItems=0

    if(listadoPedidos &&listadoPedidos!=null)
    listadoPedidos.map((pedido,index)=>{
    contadorItems=contadorItems+pedido.cantidad;
 
  })

 

  setCantidadProductos(()=>contadorItems);

  },);

  const activarNav=(e)=>e?'nav_activado':'not_nav_activado';
  

  const activarCarrito=(e)=>e?'image-carrito activado':'image-carrito';



  const mostrar=()=>{
    if(mostrarLista) setMostrarLista(false)
      else setMostrarLista(true);
  }
  


  return (
    <div className='navHead'>



      <Head/>
      
      

        
        <ul>
          <li><NavLink to='/carrito'  className={({isActive})=>activarCarrito(isActive)}>
                  <div className='btnCarrito'>
                     <p>{cantidadProductos}</p>
                    <FaShoppingCart   className={({isActive})=>activarCarrito(isActive)}/>
                   
                  </div>
          </NavLink></li>

          
          

          <div className={mostrarLista?"lista-nav":"mostrar-ocultar"}>

          <li><NavLink onClick={()=>mostrar()} to='/inicio' className={({isActive})=>activarNav(isActive)}>Inicio</NavLink></li>
          <li><NavLink onClick={()=>mostrar()} to='/menu' className={({isActive})=>activarNav(isActive)}>Menú</NavLink></li>
          <li><NavLink onClick={()=>mostrar()} to='/quienes_somos' className={({isActive})=>activarNav(isActive)}> Quienes Somos</NavLink></li>
         {/* <li><NavLink to='/contacto' className={({isActive})=>activarNav(isActive)}>Contacto</NavLink></li>*/}
          </div>
          <FaBars onClick={()=>mostrar()}  className='btnLista'/>
          
        </ul>

    </div>
  )
}
