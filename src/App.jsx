import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import Error404 from './components/Error404'
import comprarTodo from "./components/Main/Home/pages/ComprarTodo/ComprarTodo";
import Celulares from "./components/Main/Home/pages/Celulares/Celulares";


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
