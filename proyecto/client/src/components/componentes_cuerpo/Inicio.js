import '../cabecera.js';
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
            <div className="card text-white bg-secondary mb-3 sticky-top" >
                <div className="card-header">CONTACTO</div>
                <div className="card-body">
                    <h5 className="card-title">LLAMA A NUESTRO NÚMERO DE TELÉFONO</h5>
                    <p className="card-text">+34 662 47 32 48</p>
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
                        <Carousel interval={3000} pause={'hover'}>
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