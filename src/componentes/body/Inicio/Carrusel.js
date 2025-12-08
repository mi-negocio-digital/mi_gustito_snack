import React, { useState,useEffect } from 'react'
import { dataSlides } from '../../../data/dataSlides'
import './Carrusel.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

export const Carrusel = () => {

  const [slide,setSlide]=useState(0);

  useEffect(()=>{

    const interval=setInterval(() => {
     setSlide(prev=>prev===dataSlides.length-1? 0:prev+1);
    }, 3000);

    return()=>clearInterval(interval);

  },[]);

  

  const left_button=()=>{

    setSlide(slide===0? dataSlides.length-1:slide-1);
  }

  const right_button=()=>{

    setSlide(slide===dataSlides.length-1? 0:slide+1);
  }

  const cambiarSlide=(e)=>{
    
    setSlide(e);
  }

  return (
    <div className='carrusel'>
       <BsArrowLeftCircleFill className='arrow arrow_left' onClick={left_button}/>
      {dataSlides.map((data,index)=>{
          return(
              < img src={data.src} alt={data.alt} key={index} className={(index===slide)?'slide':'slide-hidden'}></img>
          ) //integracion de imagenes para agregar al carrusel
          
          
      })}

    <BsArrowRightCircleFill className='arrow arrow_right' onClick={right_button}/>

    <div className='group_indicador'>

    {dataSlides.map((data,index)=>{
      return(
        <button key={index} 
        className={index===slide?'indicador':'indicador indicador-presionado'}
        onClick={()=>cambiarSlide(index)}
        ></button>
      )
    })}</div>
    </div>
  )
}
