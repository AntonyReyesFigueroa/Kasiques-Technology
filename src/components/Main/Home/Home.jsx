import React from 'react'
import './Home.css'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import { useState } from 'react'
import Celulares from './pages/Celulares/Celulares'
import Audifonos from './pages/Audifonos/Audifonos'
import Ofertas from './pages/Ofertas/Ofertas'
const Home = () => {

  const [headerLink, setHeaderLink] = useState('comprarTodo');


  
  const [lapis, setLapis] = useState()

  const headerComprarTodo = () => {
    setHeaderLink('comprarTodo')
  }

  const headerCelulares = () => {
    setHeaderLink('celulares')
  }

  const headerAudifonos = () => {
    setHeaderLink('audifonos')
  }

  const headerOfertas = () => {
    setHeaderLink('ofertas')
  }

  console.log(headerLink);

  return (
    <div>

      {/* <div className='container_header_home'>
        <ul className='ul_header_home nav nav-tabs d-flex justify-content-start'>
          <li onClick={ () => setHeaderLink('comprarTodo')} className='li_header_home nav-item'><a className=' nav-link' href="">Comprar todo</a></li>
          <li onClick={headerCelulares} className='li_header_home nav-item'><a className=' nav-link' href="">Celulares</a></li>
          <li onClick={headerAudifonos} className='li_header_home nav-item'><a className=' nav-link' href="">Audifonos</a></li>
          <li onClick={headerOfertas} className='li_header_home nav-item'><a className=' nav-link' href="">Ofertas</a></li>
        </ul>
      </div> */}

      <div className='nav_header_home'>
        <ul className='ul_header_home'>
          <li onClick={headerComprarTodo} className='li_header_home'>Comprar todo</li>
          <li onClick={headerCelulares} className='li_header_home'>Celulares</li>
          <li onClick={headerAudifonos} className='li_header_home'>Audifonos</li>
          <li onClick={headerOfertas} className='li_header_home'>Ofertas</li>
        </ul>
      </div>



      <div className='container_pages' >
        {
          headerLink==="comprarTodo" ?
            <ComprarTodo />
            : 
            headerLink==="celulares" ?
            <Celulares />
            : 
            headerLink==="audifonos" ?
            <Audifonos />
            : 
            headerLink==="ofertas" ?
            <Ofertas />
            : 
            ''
        }
      </div>

    </div>
  )
}

export default Home