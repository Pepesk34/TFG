import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import { Link, useLocation } from "react-router-dom";

const Cabecera = () => {
    const location = useLocation();  // Obteniendo la ubicación actual

    return (
        <div id="cabecera">
            <div id='divcabecera'>
                <div id="divlogo">
                    <img id="logo" src={logo} alt="logo" />
                </div>
                <div id="divapartados">
                    <div id='apartadocabecera'>
                        <h3>
                            <Link to='/Inicio' className={`nav-link ${location.pathname === "/Inicio" ? "active" : "inactive"}`}>
                                INICIO
                            </Link>
                        </h3>
                    </div>
                    <div id='apartadocabecera'>
                        <h3>
                            <Link to='/Ayuda' className={`nav-link ${location.pathname === "/Ayuda" ? "active" : "inactive"}`}>
                                AYUDA
                            </Link>
                        </h3>
                    </div>
                    <div id='apartadocabecera'>
                        <h3>
                            <Link to='/InicioSesion' className={`nav-link ${location.pathname === "/InicioSesion" ? "active" : "inactive"}`}>
                                INICIAR SESIÓN
                            </Link>
                        </h3>
                    </div>
                    <div id='apartadocabecera'>
                        <h3>
                            <Link to='/Registrarse' className={`nav-link ${location.pathname === "/Registrarse" ? "active" : "inactive"}`}>
                                REGISTRARSE
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cabecera;
