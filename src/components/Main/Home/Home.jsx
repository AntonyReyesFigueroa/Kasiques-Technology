import React from 'react'

import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import './Home.css'
import { useState } from 'react'
import Celulares from './pages/Celulares/Celulares'
import Audifonos from './pages/Audifonos/Audifonos'
import Ofertas from './pages/Ofertas/Ofertas'
const Home = () => {

  const [headerLink, setHeaderLink] = useState('celulares');

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

      <div className='container_header_home'>
        <ul className='ul_header_home nav nav-tabs d-flex justify-content-start'>
          <li onClick={ () => setHeaderLink('comprarTodo')} className='li_header_home nav-item'><a className=' nav-link' href="">Comprar todo</a></li>
          <li onClick={headerCelulares} className='li_header_home nav-item'><a className=' nav-link' href="">Celulares</a></li>
          <li onClick={headerAudifonos} className='li_header_home nav-item'><a className=' nav-link' href="">Audifonos</a></li>
          <li onClick={headerOfertas} className='li_header_home nav-item'><a className=' nav-link' href="">Ofertas</a></li>
        </ul>
      </div>



      <div className='p-5 mt-5' >
        {
          headerLink==="comprarTodo" ?
            <ComprarTodo />
            : 
            ''
        }
      </div>

    </div>
  )
}

export default Home