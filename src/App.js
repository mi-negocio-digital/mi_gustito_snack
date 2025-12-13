
import './App.css';
import React,{useState,useEffect} from 'react'
import { Routes } from './componentes/Routes';
import { ContextoPedidos } from './helpers/ContextoPedidos';
import {ContextoMensajeConfirmacion} from './helpers/ContextoMensajeConfirmacion'
import { ConfirmacionPedido } from './componentes/ventanasConfirmacion.js/ConfirmacionPedido';

function App() {

      const[listadoPedidos,setListadoPedidos]=useState(
        ()=>{
        const saved= localStorage.getItem("pedidos");
        return saved ? JSON.parse(saved):null;}
      );

      const [mensajeConfirmacion, setMensajeConfirmacion] = useState({
      'valor':0,
      'seleccion':0,
      'item':null,
      'titulo':'',
      'mensaje':''
    });
      
            useEffect(()=>{
      
              conseguirListadoPedidos();
      
          },[])
      
      
          const conseguirListadoPedidos=()=>{

            
            
              let pedidos = JSON.parse(localStorage.getItem("pedidos"));
              setListadoPedidos(pedidos);
             
              return pedidos
          }
  return (
    <div>

     

    <ContextoMensajeConfirmacion.Provider value={{
        mensajeConfirmacion,
        setMensajeConfirmacion
    }}>

      <ContextoPedidos.Provider value={{
        listadoPedidos,
        setListadoPedidos
      }}>





        
      
       {mensajeConfirmacion.valor ===1?(<ConfirmacionPedido/>):
       (<Routes/>)}
      </ContextoPedidos.Provider>

      </ContextoMensajeConfirmacion.Provider>

      
    </div>
  );
}

export default App;
