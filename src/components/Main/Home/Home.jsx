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
    <div className='home'>

      <div className='nav_header_home'>
        <ul className='ul_header_home'>
          <li onClick={headerComprarTodo} className='li_header_home'>Sin categoria</li>
          <li onClick={headerCelulares} className='li_header_home'>Adaptadores</li>
          <li onClick={headerAudifonos} className='li_header_home'>Audifonos inalambricos</li>
          <li onClick={headerOfertas} className='li_header_home'>Cables</li>
          <li onClick={headerOfertas} className='li_header_home'>Calculadoras</li>
          <li onClick={headerOfertas} className='li_header_home'>Tomacorrientes/Estabilizadores</li>
          <li onClick={headerOfertas} className='li_header_home'>Bombillas</li>
        </ul>
      </div>



      <div className='container_page' >
        {
          headerLink === "Sin_categoria" ?
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
            headerLink === "Adaptadores" ?
              <div className='container_categorias'>
                {
                  data && data.map(data => (
                    data.categoria === 'Adaptadores' ?
                      <ComprarTodo
                        key={data?.id}
                        data={data}
                      />
                      :
                      null

                  ))
                }
              </div>
              :
              headerLink === "Audifonos_inalambricos" ?
                <div className='container_categorias'>
                  {
                    data && data.map(data => (
                      data.categoria === 'Audifonos_inalambricos' ?
                        <ComprarTodo
                          key={data?.id}
                          data={data}
                        />
                        :
                        null

                    ))
                  }
                </div>
                :
                headerLink === "Cables" ?
                  <div className='container_categorias'>
                    {
                      data && data.map(data => (
                        data.categoria === 'Cables' ?
                          <ComprarTodo
                            key={data?.id}
                            data={data}
                          />
                          :
                          null

                      ))
                    }
                  </div>
                  :
                  headerLink === "Calculadoras" ?
                    <div className='container_categorias'>
                      {
                        data && data.map(data => (
                          data.categoria === 'Calculadoras' ?
                            <ComprarTodo
                              key={data?.id}
                              data={data}
                            />
                            :
                            null

                        ))
                      }
                    </div>
                    :
                    headerLink === "Tomacorrientes_Estabilizadoresrtas" ?
                      <div className='container_categorias'>
                        {
                          data && data.map(data => (
                            data.categoria === 'Tomacorrientes_Estabilizadoresrtas' ?
                              <ComprarTodo
                                key={data?.id}
                                data={data}
                              />
                              :
                              null

                          ))
                        }
                      </div>
                      :
                      headerLink === "Bombillas" ?
                        <div className='container_categorias'>
                          {
                            data && data.map(data => (
                              data.categoria === 'Bombillas' ?
                                <ComprarTodo
                                  key={data?.id}
                                  data={data}
                                />
                                :
                                null

                            ))
                          }
                        </div>
                        :

                        ''
        }
      </div>



    </div>
  )
}

export default Home