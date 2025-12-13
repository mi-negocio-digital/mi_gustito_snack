

import { Footer } from '../componentes/Footer';

import { Nav } from '../componentes/Nav';
import { Outlet } from 'react-router-dom'

export const Frontend = () => {

  

  return (

    <div className='body'>


      <div className='layout' >  

    
     
      <nav className='nav'>
     {  <Nav/>}

      </nav>

      <div className='content'>
     {/*Aqui va la ruta */}
       <Outlet/>

      </div>
      
    
            <footer className='footer'>
        <Footer/>
      </footer>
    

      
    
    </div>


    </div>

    
  )
}
