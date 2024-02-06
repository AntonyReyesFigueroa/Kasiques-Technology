import React from 'react'
import { Link } from 'react-router-dom'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import './Home.css'
import { useState } from 'react'
const Home = () => {

  const [headerLink, setHeaderLink] = useState('');

  const headerHome =() => {
    setHeaderLink('comprarTodo')
  }

  return (
    <div>

      <div className='container_header_home'>
        <ul className='ul_header_home'>
          <li onClick={() => headerHome} className='li_header_home'><a href="">Comprar todo</a></li>
          <li onClick={() => headerHome} className='li_header_home'><a href="">Celulares</a></li>
          <li onClick={() => headerHome} className='li_header_home'><a href="">Audifonos</a></li>
          <li onClick={() => headerHome} className='li_header_home'><a href="">Ofertas</a></li>
        </ul>
      </div>

      {
        headerLink === 'comprarTodo'?
        <ComprarTodo/>
        :
        null
      }

    </div>
  )
}

export default Home