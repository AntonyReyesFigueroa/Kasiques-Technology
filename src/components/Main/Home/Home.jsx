import React, { useEffect } from 'react'
import './Home.css'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import { useState } from 'react'
import Celulares from './pages/Celulares/Celulares'
import Audifonos from './pages/Audifonos/Audifonos'
import Ofertas from './pages/Ofertas/Ofertas'
import useGet from '../../../Hooks/useGet'
const Home = () => {

  const [headerLink, setHeaderLink] = useState('comprarTodo');

  const { data, getData } = useGet('https://65c2e3fdf7e6ea59682bc40a.mockapi.io/Producto')

  useEffect(() => {
    getData()
  }, [data])

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
  

  return (
    <div>

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
          headerLink === "comprarTodo" ?
            <div className='container_categorias'>
              {
                data && data.map(data => (
                  <ComprarTodo
                  key={data?.id}
                  data={data}
                />
                
                ))
              }
            </div>
            :
            headerLink === "celulares" ?
              <Celulares
                key={data?.id}
                data={data}
              />
              :
              headerLink === "audifonos" ?
                <Audifonos
                  key={data?.id}
                  data={data}
                />
                :
                headerLink === "ofertas" ?
                  <Ofertas
                    key={data?.id}
                    data={data}
                  />
                  :
                  ''
        }
      </div>



    </div>
  )
}

export default Home