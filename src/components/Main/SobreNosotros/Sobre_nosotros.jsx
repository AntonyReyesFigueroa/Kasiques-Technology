import React, { useState } from 'react'
import ftAcercaDe from '../../../image/img_acerca_De.jpg'
import ftDelivery from '../../../image/delivery.png'
import ftCambios from '../../../image/Camdevoluciones.jpg'
import ftPromos from '../../../image/promo.png'
import ftAtencion from '../../../image/horario.jpeg'
import ftmApple from '../../../image/imgmarcas/aple.png'
import ftmsamsung from '../../../image/imgmarcas/samsung.png'
import ftmsoni from '../../../image/imgmarcas/soni.png'
import ftmewwto from '../../../image/imgmarcas/ewwtoo.png'
import ftmjbl from '../../../image/imgmarcas/jbll.png'
import ftmlevono from '../../../image/imgmarcas/lenovoo.png'
import ftmwireles from '../../../image/imgmarcas/wireles.png'
import ftmromax from '../../../image/imgmarcas/romax.png'

import Card from 'react-bootstrap/Card';
import './Sobre_nosotros.css'

const Sobre_nosotros = () => {
  return (
    <>
      <div className='AcercaDe'>


        <h3 className='title_acerca text-center'>   Kasiques Technology</h3>

        <div className="row mt-5">
          <div className="col-md-4 card-img">
            <Card.Img variant="top" src={ftAcercaDe} alt="Imagen"  width={100} height={400}/>
          </div>
          <div className="col-md-8">

            <Card>
              <Card.Body>
                <Card.Title>Misión</Card.Title>
                <Card.Text>
                  Reinventamos la experiencia digital, ofreciendo contenido
                  inspirador y soluciones tecnológicas avanzadas para crear
                  una comunidad conectada y enriquecedora.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Visión</Card.Title>
                <Card.Text>
                  Ser reconocidos como una empresa líder en la venta y suministro
                  de productos tecnológicos, ofreciendo soluciones integrales y
                  con garantía de calidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div>
          <h3 className='title_about text-center'>Nuestros servicios</h3>

          <div className="row">
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Servicio Delivery</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftDelivery} alt="" width={100} height={150} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Devoluciones</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftCambios} alt="" width={100} height={120} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Promociones</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftPromos} alt="" width={130} height={400} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">12 horas de atención</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftAtencion} alt="" width={100} height={70} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-center text-marcas'>Nuestras marcas</h3>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-3"><img src={ftmApple} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmsamsung} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmsoni} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmromax} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmlevono} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmjbl} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmewwto} alt="" width={150} /></div>
            <div className="col-sm-3"><img src={ftmwireles} alt="" width={150} /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre_nosotros

