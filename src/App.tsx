import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Corregido, ahora 'Routes' en vez de 'Switch'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreMi from './pages/sobre-mi';
import Projects from './pages/Proyectos';
import Skills from './pages/Habilidades';
import Achievements from './pages/Logros';
import AboutRamirezTech from './pages/ramirez-tech';

import Footer from './components/footer';  // Asegúrate de importar el Footer

const App: React.FC = () => {

  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      <div className="pt-4 min-h-screen bg-gray-50">
        <Routes>
          {/* Ruta de inicio (pública) */}
          <Route path="/" element={<Home />} />

          {/* Rutas Públicas */}
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Projects />} />
          <Route path="/Habilidades" element={<Skills />} />
          <Route path="/Logros" element={<Achievements />} />
          <Route path="/ramirez-tech" element={<AboutRamirezTech />} />

          
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
