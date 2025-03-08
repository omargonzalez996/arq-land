import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

import FloatingWhatsAppButton from './components/bits/FloatingWhatsappButton'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // bg-[#212529]
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-primaryaccent">
          <Navbar />
          <FloatingWhatsAppButton />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
