
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { Frontend } from './Frontend'
import {Inicio} from './body/Inicio'
import { Menu } from './body/Menu'
import {Contacto} from './body/Contacto'
import {QuienesSomos} from './body/QuienesSomos'
import { Error404 } from './body/Error404'
import { Carrito } from './body/Carrito'
import { Productos } from './Productos'
import { Categorias } from './body/Inicio/Categorias'

export const Routes = () => {



    const router=createBrowserRouter(
        [
            {
                path:'/',element:<Frontend/>,
                children:[
                    {index:true, element:<Navigate to="/inicio"/>},
                    {path:'/inicio', element: <Inicio/>},
                    {path:'/menu', element: <Menu/>},
                    {path:'/quienes_somos', element: <QuienesSomos/>},
                    {path:'/contacto', element: <Contacto/>},
                    {path:'/carrito', element: <Carrito/>},
                    
                     {path:'/menu/categorias', element:<Menu/>, errorElement:<Error404/>},
                     {path:'/menu/categorias/:id', element:<Categorias/>, errorElement:<Error404/>},
                    {path:'/menu/:id', element:<Productos/>, errorElement:<Error404/>},
                    {path:'/*', element: <Error404/>}
                   


        
                ]

            }
        ],{
            basename:'/mi_gustito_snack/'
        }
    )
  return (

    <div>

        <RouterProvider router={(router)} future={{v7_startTransition:true}}/>
    </div>
  )
}
