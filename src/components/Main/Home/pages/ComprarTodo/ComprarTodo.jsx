import React from 'react'
import './ComprarTodo.css'
import fotoProduct from '../../../../../image/addProduct.png'

const ComprarTodo = ({ data }) => {
  console.log(data);
  return (
    
    <article className='empleado'>
      <div className="empleado__tilte">
        <h3>{data?.nombre}</h3>
      </div>

      <div className='container_empleado-info'>
        <div className='empleado__img'>
          {
            data?.imagen ?
              <img src={data?.imagen} alt={data?.nombre} />
              :
              <img src={fotoProduct} alt={data?.nombre} />
          }
        </div>

        <div className='empleado__info'>
          <div className="empleado__info-datos">
            <b>Nombre: </b>
            <p>{data?.nombre} </p>
          </div>

          <div className="empleado__info-datos">
            <b>Precio: </b>
            <p>{data?.precio} </p>
          </div>

          <div className="empleado__info-datos">
            <b>Precio con descuento: </b>
            <p>{data?.descuento} </p>
          </div>


          <div className="empleado__info-datos">
            <b>Descripcion del producto: </b>
            <p>{data?.descripcion} </p>
          </div>

        </div>
      </div>



    </article>
  )
}

export default ComprarTodo