import './App.css';
import Cabecera from './components/cabecera';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/componentes_cuerpo/Inicio';
import Ayuda from './components/componentes_cuerpo/ayuda';
import InicioSesion from './components/componentes_cuerpo/iniciosesion';
import Registrarse from './components/componentes_cuerpo/registrarse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecera />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Ayuda" element={<Ayuda />} />
            <Route path="/InicioSesion" element={<InicioSesion />} />
            <Route path="/Registrarse" element={<Registrarse />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

