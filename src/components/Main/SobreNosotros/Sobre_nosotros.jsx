import React, { useState } from 'react'
import ftAcercaDe from '../../../image/img_acerca_De.jpg'

const Sobre_nosotros = () => {
  return (
    <>
      <div>
        <h3 className='title_acerca text-center'> Kasique´s Technology S.A</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <img className='img-fluid pb-2' src={ftAcercaDe} alt="img acerca de" width={600} />
         
          <div className="card text-center d-flex flex-column" >
          <div className="card-body">
            <h1 className="card-title">Misión:</h1>
            <p className="card-text">Reinventamos la experiencia digital, ofreciendo contenido inspirador y soluciones tecnológicas avanzadas para crear una comunidad conectada y enriquecedora.</p>
          </div>
        </div>

        <div className="card text-center w-4" >
          <div className="card-body">
            <h1 className="card-title">Visión:</h1>
            <p className="card-text">Ser reconocidos como una empresa líder en la venta y suministro de productos tecnológicos, ofreciendo soluciones integrales y con garantía de calidad.</p>
          </div>
        </div>
        </div>

      </div>

      <div>
        <h3 className='title_about'>Nuestros servicios</h3>

        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Servicio Delivery</p>
                <img  className='d-flex align-items-center d-block' src={ftAcercaDe} alt="" width={300} height={150} />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text"> Envios & Devoluciones</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Promociones</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">12 horas de atención</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Nuestras marcas</h1>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-3"><img src={ftAcercaDe} alt="" /></div>
          <div className="col-sm-3"><img src={ftAcercaDe} alt="" /></div>
          <div className="col-sm-3"><img src={ftAcercaDe} alt="" /></div>
          <div className="col-sm-3"><img src={ftAcercaDe} alt="" /></div>
        </div>
      </div>

    </>
  )
}

export default Sobre_nosotros

