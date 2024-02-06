import React, { useState } from 'react'
import './Header.css'
import userDefault from '../../image/user_img.avif'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './NavbarShop.jsx'

const Header = ({ isOpen, setIsOpen }) => {

    const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();

    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} alt="" />
                <p>Kasiques Technology</p>

                <div className={`nav_toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className={`nav__links ${isOpen && "open__menu"} navbar-expand-lg`}  onClick={() => setIsOpen(false)} >
                <li> <Link to='/'>Inicio</Link> </li>
                <li> <Link to='/sobre-nosotros'>Acerca de</Link> </li>
                <li> <Link to='*/'>Contacto</Link> </li>

            </div>

            <div className="container navbar-expand-lg">
                <div className="row">
                    <div className="col">
                        <ul class="nav nav-tabs d-flex  justify-content-end align-item-center">
                            <li class="nav-item">
                                <Link class="nav-link text-light" aria-current="page" to="/comprarTodo">Comprar todo</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/ofertas">Ofertas</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='nav__user'>
                <div className='nav__user-datos ocultar'>

                    {
                        isLoading ?
                            <p>Cargando...</p>
                            :
                            isAuthenticated ?
                                <p> {user.email} </p>
                                :
                                <p>Sin usuario</p>
                    }


                    {
                        isAuthenticated ?
                            <button onClick={() => logout()}>
                                salir
                            </button>
                            :

                            <button className='btn_inicioSecion' onClick={() => loginWithRedirect()}>
                                Registrate
                            </button>

                    }

                </div>

            </div>
        </nav>
    )
}

export default Header


