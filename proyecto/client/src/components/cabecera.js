import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from './componentes_cuerpo/Inicio.js';
import { Ayuda } from './componentes_cuerpo/ayuda.js';
import { InicioSesion } from './componentes_cuerpo/iniciosesion.js';
import { Registrarse } from './componentes_cuerpo/registrarse.js';

const Cabecera = () => {
    return (
        <div id="cabecera">
            <div  class="row">
                <div class="col-xl-6">
                    <div id="divlogo">
                        <img id="logo" src={logo}></img>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div id="apartados">
                        <h5>
                            <Link to='/Inicio'>INICIO</Link>
                            <Link to='/Ayuda'>AYUDA</Link>
                            <Link to='/InicioSesion'>INICIAR SESIÓN</Link>
                            <Link to='/Registrarse'>REGISTRARSE</Link>
                        </h5>

                    </div>
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/Inicio' element={<Inicio />}></Route>
                    <Route path='/Ayuda' element={<Ayuda />}></Route>
                    <Route path='/InicioSesion' element={<InicioSesion />}></Route>
                    <Route path='/Registrarse' element={<Registrarse />}></Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}
export default Cabecera