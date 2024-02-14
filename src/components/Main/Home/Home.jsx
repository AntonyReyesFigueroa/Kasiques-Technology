import React, { useEffect } from 'react'
import './Home.css'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import { useState } from 'react'
import Celulares from './pages/Celulares/Celulares'
import Audifonos from './pages/Audifonos/Audifonos'
import Ofertas from './pages/Ofertas/Ofertas'
import useGet from '../../../Hooks/useGet'
const Home = () => {

  const [headerLink, setHeaderLink] = useState('Sin_categoria');

  const { data, getData } = useGet('https://65c2e3fdf7e6ea59682bc40a.mockapi.io/Producto')

  useEffect(() => {
    getData()
  }, [data])

  const [lapis, setLapis] = useState()

  const Sin_categoria = () => {
    setHeaderLink('Sin_categoria')
  }

  const Adaptadores = () => {
    setHeaderLink('Adaptadores')
  }

  const Audifonos_inalambricos = () => {
    setHeaderLink('Audifonos_inalambricos')
  }

  const Cables = () => {
    setHeaderLink('Cables')
  }

  const Calculadoras = () => {
    setHeaderLink('Calculadoras')
  }

  const mouse = () => {
    setHeaderLink('mouse')
  }

  
  const Tomacorrientes_Estabilizadoresrtas = () => {
    setHeaderLink('Tomacorrientes_Estabilizadoresrtas')
  }

  
  const Bombillas = () => {
    setHeaderLink('Bombillas')
  }


  console.log(headerLink);

  return (
    <div className='home'>

      <div className='nav_header_home'>
        <ul className='ul_header_home'>
          <li onClick={Sin_categoria}   className='li_header_home'>Sin categoria</li>
          <li onClick={Adaptadores} className='li_header_home'>Adaptadores</li>
          <li onClick={Audifonos_inalambricos} className='li_header_home'>Audifonos inalambricos</li>
          <li onClick={Cables} className='li_header_home'>Cables</li>
          <li onClick={Calculadoras} className='li_header_home'>Calculadoras</li>
          <li onClick={Tomacorrientes_Estabilizadoresrtas} className='li_header_home'>Tomacorrientes/Estabilizadores</li>
          <li onClick={Bombillas} className='li_header_home'>Bombillas</li>
          <li onClick={mouse} className='li_header_home'>Mouse</li>
        </ul>
      </div>



      <div className='container_page' >
        {
          headerLink === 'Sin_categoria' ?
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
                         headerLink === "mouse" ?
                           <div className='container_categorias'>
                             {
                               data && data.map(data => (
                                 data.categoria === 'mouse' ?
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