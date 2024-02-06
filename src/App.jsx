import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import Error404 from './components/Error404'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
     <div className=" text-light bg-dark vh-100">
      {/* Definir las rutas */}
      <BrowserRouter>
        {/* cargamos todos los componentes */}
        <Header />
        {/* Esto es lo unico que cambia */}
        <Routes>
          {/* Definimos cada ruta */}
          <Route path='/' element={<Home />}></Route>
          <Route path="/sobre-nosotros" element={<Sobre_nosotros />}></Route>
          <Route path='/' element={<Contacto />}></Route>
          <Route path='/*' element={<Error404 />}></Route>

          <Route path='comprarTodo' element={<ComprarTodo />}></Route>
          <Route path='ofertas' element={<ofertas />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
