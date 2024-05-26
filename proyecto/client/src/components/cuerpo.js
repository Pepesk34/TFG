import React, { useEffect } from 'react';
import './cabecera.css';
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/pepe.jpeg";
import prueba from "./script.js";
import Registrarse from './registrarse.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from './inicio.js';

const Cuerpo = () => {
    useEffect(() => {
        prueba(); // Llama a la función después de que el DOM se haya cargado completamente
    }, []);

    return (
        <div>
            <Inicio />
            <BrowserRouter>
                <div id="InicioSesion">
                    <Link to="/registrarse.js">Dale para registrarse</Link>
                    <Routes>
                        <Route path="/registrarse.js" element={<Registrarse></Registrarse>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
};

export default Cuerpo;
