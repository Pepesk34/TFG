
import './App.css';
import Cabecera from './components/cabecera.js';
import CabeceraRecolecta from './components/cabecerarecolecta.js';
import Cuerpo from './components/cuerpo.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Inicio from './components/componentes_cuerpo/Inicio.js';
import Comunidad from './components/componentes_cuerpo/comunidad.js';
import InicioSesion from './components/componentes_cuerpo/iniciosesion.js';
import Agricultor from "./components/componentes_cuerpo/agricultores.js"
import Voluntario from "./components/componentes_cuerpo/registrarVoluntario.js"
import Recolecta from './components/componentes_cuerpo/recolecta';
import Registrarse from './components/componentes_cuerpo/registrarse.js';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<><Cabecera /><Inicio /></>} />
          <Route path="/comunidad" element={<><Cabecera /><Comunidad /></>} />
          <Route path="/registrarse" element={<><Cabecera /><Registrarse /></>} />
          <Route path="/iniciosesion" element={<><Cabecera /><InicioSesion /></>} />
          <Route path="/agricultor" element={<><Cabecera /><Agricultor /></>} />
          <Route path="/recolecta" element={<><CabeceraRecolecta /><Recolecta /></>} />
          <Route path="/voluntario" element={<><Cabecera /><Voluntario /></>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
