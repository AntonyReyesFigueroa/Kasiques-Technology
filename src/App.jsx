import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import ProtectedRoutes from './components/ProtectedRoutes'
import Reseña from './components/Main/Reseña/Reseña'
import Empleado from './components/Main/Empleado/Empleado'
import Error404 from './components/Error404'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='container__app'>

        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        <main onClick={() => setIsOpen(false)}>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
          
          <Route path='/*' element={<Error404 />} /> 

          <Route element={<ProtectedRoutes/>}>
            <Route path='/reseña' element={<Reseña />} />
            <Route path='/Empleado' element={<Empleado />} /> 
          </Route>
 
            {/* <Route path='/' element={<Home />} />
<Route path='/Sobre-Nosotros' element={<SobreNosotros />} />
<Route path='/Carta' element={<Carta />} />
<Route path='/Login' element={<Login />} />

<Route path='/*' element={<Error />} /> */}

            {/* <Route element={<ProtectedRoutes />}>
              <Route path='/Reservaciones' element={<Reservaciones />} />
              <Route path='/Reseña' element={<Reseña />} />
              <Route path='/Empleado' element={< Empleado />} />
            </Route> */}
            {/* <Route element={<ProtectedRoutes />} >
    <Route path='/Empleado' element={<Empleado />} /> */}
            {/* <Route path='/pokedex/:name' element={<PokemonDetails />} /> */}
            {/* </Route> */}
          </Routes>


        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App
