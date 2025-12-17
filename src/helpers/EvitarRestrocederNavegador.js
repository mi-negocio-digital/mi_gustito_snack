import { useEffect, useContext } from "react";
import { ContextoMensajeConfirmacion } from './ContextoMensajeConfirmacion';

// constante que contiene el useEffect
export const EvitarRestrocederNavegador = () => {

    const {mensajeConfirmacion,setMensajeConfirmacion} =useContext(ContextoMensajeConfirmacion);
  useEffect(() => {
    const handlePopState = (event) => {
      // Evita que el usuario retroceda
      //alert("No puedes retroceder desde aquí 🚫");
          setMensajeConfirmacion(({
                'valor':0,
                'titulo':'',
                'mensaje':'',
            }))
      window.history.pushState(null, "", window.location.pathname);
    };

    // Empuja un estado inicial
    window.history.pushState(null, "", window.location.pathname);

    // Escucha el evento de retroceso
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
};
