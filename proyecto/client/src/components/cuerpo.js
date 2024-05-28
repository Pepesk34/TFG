
import './estilo.css';
import Registrarse from './componentes_cuerpo/registrarse.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Inicio from './componentes_cuerpo/Inicio.js';
import Agricultor from "./componentes_cuerpo/agricultores.js"
import Voluntario from "./componentes_cuerpo/voluntarios.js"
//cuerpo.js
const Cuerpo = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/registrarse" element={<Registrarse />} />
                    <Route path="/agricultor" element={<Agricultor />} />
                    <Route path="/voluntario" element={<Voluntario />} />
                </Routes>
                
            </BrowserRouter>
        </div>
    );
};

export default Cuerpo;
