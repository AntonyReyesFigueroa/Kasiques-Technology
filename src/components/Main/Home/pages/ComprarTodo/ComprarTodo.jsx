import React from 'react'
import './ComprarTodo.css'
import fotoProduct from '../../../../../image/addProduct.png'

const ComprarTodo = ({ data }) => {

  return (
    
    <article  className='producto_color'>
      <div className="producto__tilte">
        <h3>{data?.nombre}</h3>
      </div>

      <div className='container_producto-info'>
        <div className='producto__image'>
          {
            data?.imagen ?
              <img src={data?.imagen} alt={data?.nombre} />
              :
              <img src={fotoProduct} alt={data?.nombre} />
          }
        </div>

        <div className='producto__info'>

          <div className="producto__info-datoss">
            <b>Precio antes: </b>
            <b>s/ {data?.precio} </b>
          </div>

          <div className="producto__info-datoss">
            <b>Precio: </b>
            <b>s/ {data?.descuento} </b>
          </div>

        </div>
      </div>



    </article>
  )
}

export default ComprarTodo