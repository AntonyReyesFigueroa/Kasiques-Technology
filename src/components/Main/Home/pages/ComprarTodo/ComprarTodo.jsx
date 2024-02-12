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
        <div className='producto__img'>
          {
            data?.imagen ?
              <img src={data?.imagen} alt={data?.nombre} />
              :
              <img src={fotoProduct} alt={data?.nombre} />
          }
        </div>

        <div className='producto__info'>
          <div className="producto__info-datos">
            <b>Nombre: </b>
            <b>{data?.nombre} </b>
          </div>

          <div className="producto__info-datos">
            <b>Precio: </b>
            <b>s/ {data?.precio} </b>
          </div>

          <div className="producto__info-datos">
            <b>Precio con descuento: </b>
            <b>s/ {data?.descuento} </b>
          </div>


          <div className="producto__info-datos">
            <b>Descripcion del producto: </b>
            <b>{data?.descripcion} </b>
          </div>

        </div>
      </div>



    </article>
  )
}

export default ComprarTodo