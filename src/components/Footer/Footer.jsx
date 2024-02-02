import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer__section'>
           <b >
                <a className='s' href="https://maps.app.goo.gl/3ykT51E4KRyd9J5H7" target="_blank" rel="noopener noreferrer">

                    <i className="fas fa-map-marker-alt"></i> AV. Los heroes 0434 Bar. San Sebastian, Cajamarca
                </a>
            </b>
           </div>
            <div className='footer__section'>
                <b>
                    <a className='s' href="https://www.facebook.com/merejo.escobal" target="_blank" rel="noopener noreferrer">

                        <i className="fab fa-facebook"></i> Kasiques technoloy 1

                        <i className="fab fa-facebook"></i> Kasiques technoloy 2
                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.tiktok.com/@lostronkitos.namora?_t=8dfBW3lkWBy&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i> @kaiskes-technoloy prueba
                    </a>
                </b>
            </div>

            <div className='footer__section'>
                <b>
                    <a href="tel:+51930702459"><i className="fas fa-phone"></i> 930 702 459</a>

                </b>
                <b>
                    <a href="https://api.whatsapp.com/send?phone=51930702459" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i> 930 702 459</a>
                </b>
            </div>
        </div>
    )
}

export default Footer