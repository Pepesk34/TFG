import '../cabecera.js';
import '../estilos/inicio-estilo.css';
import imagen1 from "../imagenes/imagen1.jpg";
import imagen2 from "../imagenes/pepe.jpeg";
import imagen3 from "../imagenes/verduras.jpg";
import imagen4 from "../imagenes/verduras2.jpg";
import imagen5 from "../imagenes/verduras3.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Inicio = () => {

    return (
        <div>
            <div className="card text-white bg-secondary mb-3 sticky-top" id='card-contacto'>
                <div className="card-body">
                    <h5 className="card-title">CONTACTO: +34 662 47 32 48</h5>
                    <p className="card-text"></p>
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
                        <h4>
                            Somos una plataforma que conecta a dedicados agricultores de la región de Almeria con
                            personas voluntarias que desean contribuir a una causa noble: reducir el desperdicio de
                            alimentos y ayudar a quienes lo necesitan. Nosotros creemos en un mundo donde cada alimento
                            cuenta, donde cada gesto de generosidad tiene un impacto real.
                        </h4>
                        <br></br>
                        <h5>
                            Por eso hemos creado GREEN BOYD HOUSE, una herramienta que consigue conectar con un click,
                            a cualquier agricultor agricultor de Almería con cualquier voluntario que se disponga a ayudar.
                        </h5>
                        <Link to="/about" >
                            <button className="btn btn-light" type='button'id='button-about'>
                                ¿QUIERES SABER MÁS?
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16" id='boton-flecha'>
                                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row" id='fila2'>
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

            <div className="row">
                <div className="col-xl-12">
                    <div id="div-carousel">
                        <Carousel interval={3000} pause={false}>
                            <Carousel.Item className='inicio-item-carousel'>
                                <img className='inicio-img-carousel' src={imagen3} alt="First slide" />
                                <Carousel.Caption className='inicio-caption-carousel'>
                                    <h3>Detén el Desperdicio</h3>
                                    <p>Millones de verduras terminan en la basura cada día. Juntos podemos cambiar eso.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='inicio-item-carousel'>
                                <img className='inicio-img-carousel' src={imagen4} alt="Second slide" />
                                <Carousel.Caption className='inicio-caption-carousel'>
                                    <h3>Salva Alimentos, Salva el Planeta</h3>
                                    <p>Reducir el desperdicio de alimentos es un paso importante hacia la sostenibilidad.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='inicio-item-carousel'>
                                <img className='inicio-img-carousel' src={imagen5} alt="Third slide" />
                                <Carousel.Caption className='inicio-caption-carousel'>
                                    <h3>Únete a Nuestra Causa</h3>
                                    <p>Cada verdura salvada es una victoria contra el desperdicio. ¡Únete a nosotros!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-xl-12'>
                    <div id="InicioSesion">
                        <div id="contenido">
                            <h2 id="mensaje_registrarse">¡Únete a nosotros y ayuda a llevar alimentos <br></br>a quienes más lo necesitan!</h2>

                            <Link to="/registrarse"><button id="boton_registrar">Registrarse</button></Link>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Inicio;