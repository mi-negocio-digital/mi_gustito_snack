import React from 'react'

export const ConfirmacionCaracteristicasPedidos = ({titulo,mensaje}) => {
  return (
        <div className='ventanaConfirmacion'>
        
        <section>
            <h3>{titulo}</h3>

            <p>{mensaje}</p>

            <button>Aceptar</button>
            <button>Cancelar</button>


        </section>
        
        </div>
  )
}
