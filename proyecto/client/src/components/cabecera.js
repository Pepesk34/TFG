import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import { Link } from "react-router-dom";

const Cabecera = () => {
    return (
        <div id="cabecera">
            <div className="row">
                <div className="col-xl-6">
                    <div id="divlogo">
                        <img id="logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="col-xl-6">
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
        </div>
    );
}

export default Cabecera;
