
import { NavLink } from 'react-router-dom'

import { Head } from './Head';
export const Nav = () => {

  const activarNav=(e)=>e?'nav_activado':'not_nav_activado';



  return (
    <div className='navHead'>



      <Head/>
      
      
      
        <ul>
          <li><NavLink to='/inicio' className={({isActive})=>activarNav(isActive)}>Inicio</NavLink></li>
          <li><NavLink to='/menu' className={({isActive})=>activarNav(isActive)}>Menú</NavLink></li>
          <li><NavLink to='/quienes_somos' className={({isActive})=>activarNav(isActive)}> Quienes Somos</NavLink></li>
          <li><NavLink to='/contacto' className={({isActive})=>activarNav(isActive)}>Contacto</NavLink></li>
          <li><NavLink to='/carrito' className={({isActive})=>activarNav(isActive)}>Carrito</NavLink></li>
          
        </ul>
    </div>
  )
}
