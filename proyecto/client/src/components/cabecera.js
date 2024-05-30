import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonCabecera from './botonCabecera';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

//---------------------------------------------------------------------
//DESPLAZAR A DONDE QUIERAS EN LA PÁGINA AL PULSAR UN BOTÓN
const handleScrollToTop = () => {
    window.scrollTo({
        top: 190,
        behavior: 'smooth'
    });
};

const handleClick = () => {
    // Lógica existente del botón
    console.log('Botón clickeado');

    // Llamar a handleScrollToTop para desplazar al principio
    handleScrollToTop();
};
//----------------------------------------------------------------------

function Cabecera(props) {
    return (
        <div id="cabecera">
            <div class="row">
                <div class="col-xl-4">
                    <div id="divlogo">
                        <img id="logo" src={logo}></img>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div id="apartados">
                        <h5>
                            <BotonCabecera link="/inicio" nombre="INICIO"/>

                            <BotonCabecera link="/comunidad" nombre="COMUNIDAD"/>

                            <BotonCabecera link="/registrarse" click={handleClick} nombre="REGÍSTRATE"/>

                            <BotonCabecera link="/iniciosesion" nombre="INICIAR SESION"/>

                            <BotonCabecera link="/recolecta" nombre="RECOLECTA"/>

                            {props.tipoUser === "A" ?
                                <BotonCabecera
                                    link="/registrarse"
                                    nombre="mi perfil"
                                /> : null

                            }
                        </h5>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cabecera