
import './App.css';
import Cabecera from './components/cabecera.js';
import Cuerpo from './components/cuerpo.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Inicio from './components/componentes_cuerpo/Inicio.js';
import Agricultor from "./components/componentes_cuerpo/agricultores.js"
import Voluntario from "./components/componentes_cuerpo/voluntarios.js"
import Recolecta from './components/componentes_cuerpo/recolecta';
import Registrarse from './components/componentes_cuerpo/registrarse.js';

function App() {

  return (
  

      <BrowserRouter>
        <div className="App">
          <Cabecera />
          <div className="contenido">
            <Routes>
              <Route path="/" element={<Navigate to="/inicio" />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/registrarse" element={<Registrarse />} />
              <Route path="/agricultor" element={<Agricultor />} />
              <Route path="/recolecta" element={<Recolecta />} />
              <Route path="/voluntario" element={<Voluntario />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
