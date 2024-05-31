import '../cabecera.js';
import imagen1 from "../imagenes/imagen1.jpg";
import imagen2 from "../imagenes/pepe.jpeg";
import Registrarse from './agricultores.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';

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

const Inicio = () => {

    return (
        <div>
                <div class="card text-white bg-secondary mb-3 sticky-top" >
                    <div class="card-header">CONTACTO</div>
                    <div class="card-body">
                        <h5 class="card-title">LLAMA A NUESTRO NÚMERO DE TELÉFONO</h5>
                        <p class="card-text">+34 662 47 32 48</p>
                    </div>
                </div>
            <div id="fila1" className="row">
                <div className="col-xl-6">
                    <div id="divimagen1">
                        <img id="imagen1" src={imagen1} alt="imagen1" />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div id="image-data">
                        <h2>GREEN BOYD HOUSE</h2>
                        <br />
                        <h5>Somos una plataforma que conecta a dedicados agricultores de la región de Almeria con
                            personas voluntarias que desean contribuir a una causa noble: reducir el desperdicio de
                            alimentos y ayudar a quienes lo necesitan. Nosotros creemos en un mundo donde cada alimento
                            cuenta, donde cada gesto de generosidad tiene un impacto real.</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div id="divimagen2">
                        <img id="imagen2" src={imagen2} alt="imagen2" />
                    </div>
                    <div id="image-data2">
                        <h5>
                            <div id="divreferencia"></div>
                            Según estima la FAO, los alimentos que se pierden y desperdician podrían alimentar a <b>1 260 millones</b><br /> de personas hambrientas cada año.
                        </h5>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-12'>
                    <div id="InicioSesion">
                        <div id="contenido">
                            <h2 id="mensaje_registrarse">¡Únete a nosotros y ayuda a llevar alimentos <br></br>a quienes más lo necesitan!</h2>

                            <Link to="/registrarse"><button id="boton_registrar" onClick={handleClick}>Registrarse</button></Link>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Inicio;