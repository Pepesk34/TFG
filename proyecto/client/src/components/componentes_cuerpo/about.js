import '../cabecera.js';
import '../estilos/about-estilo.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import pimiento from "../imagenes/pimiento.webp";
import tomate from "../imagenes/tomato.png";
import berenjena from "../imagenes/berenjena.webp";
import calabacin from "../imagenes/calabacin.png";
import pablo from "../imagenes/pablo.jpg";
import { Card } from 'react-bootstrap';

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='contenedor' id='about-main'>
            <div className='row about-verdura' id='about-tomate'>
                <div className='col-4 align-self-center'>
                    <img src={tomate} id='img-tomate'></img>
                </div>
                <div className='col-8 align-self-center' id='about-tomate-texto'>
                    <h1>¿QUIERES PARTICIPAR?</h1>
                    <h5>¿Eres un agricultor o un voluntario? ¡Regístrate primero!</h5>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                    </p>
                    <Link to="/registrarse"><button type="button" class="btn btn-outline-dark btn-lg" id="about-registrar">Registrarse</button></Link>
                </div>
            </div>
            <div className='row about-verdura' id='about-pimiento'>
                <div className='col-8 align-self-center' id='about-pimiento-texto'>
                    <h1>¿CÓMO FUNCIONA?</h1>
                    <h5>El funcionamiento es simple:</h5>
                    <ul className="list-group list-group-numbered" id='about-lista'>
                        <li className="list-group-item list-group-item-warning about-item">El agricultor crea una recolecta</li>
                        <li className="list-group-item list-group-item-warning about-item">Se acuerdan el lugar y la fecha</li>
                        <li className="list-group-item list-group-item-warning about-item">Los voluntarios se unen con un click</li>
                        <li className="list-group-item list-group-item-warning about-item">Los voluntarios acuden a recoger los alimentos</li>
                        <li className="list-group-item list-group-item-warning about-item">Los alimentos son llevados a un banco para su distribución</li>
                    </ul>
                </div>
                <div className='col-4 align-self-center'>
                    <img src={pimiento} id='img-pimiento'></img>
                </div>
            </div>
            <div className='row about-verdura' id='about-berenjena'>
                <div className='col-4 align-self-center'>
                    <img src={berenjena} id='img-berenjena'></img>
                </div>
                <div className='col-8 align-self-center'>
                    <h1>¿QUIÉNES SOMOS?</h1>
                    <div className='row'>
                        <div className='col-4 about-cards'>
                            <Card border='secondary' bg='dark' text='white' style={{ width: '100%' }}>
                                <Card.Img variant="top" src={pablo} />
                                <Card.Body>
                                    <Card.Title>Pablo Cano</Card.Title>
                                    <Card.Text>
                                        hola.
                                    </Card.Text>
                                    <button type="button" class='btn btn-secondary'>PERFIL</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-4 about-cards'>
                            <Card border='secondary' bg='dark' text='white' style={{ width: '100%' }}>
                                <Card.Img variant="top" src={pimiento} />
                                <Card.Body>
                                    <Card.Title>José Antonio Victoria</Card.Title>
                                    <Card.Text>
                                        hola.
                                    </Card.Text>
                                    <button type="button" class='btn btn-secondary'>PERFIL</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-4 about-cards'>
                            <Card border='secondary' bg='dark' text='white' style={{ width: '100%' }}>
                                <Card.Img variant="top" src={pimiento} />
                                <Card.Body>
                                    <Card.Title>Ángel Adrián Pérez</Card.Title>
                                    <Card.Text>
                                        hola.
                                    </Card.Text>
                                    <button type="button" class='btn btn-secondary'>PERFIL</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row about-verdura' id='about-calabacin'>
                <div className='col-8 align-self-center'>
                    <h1>¿NECESITAS AYUDA?</h1>
                    <h5>LLAMA A NUESTRO NÚMERO DE TELÉFONO PARA CONSULTAR DUDAS</h5>
                    <h5>ENVÍANOS UN CORREO Y TE ASESORAREMOS</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                </div>
                <div className='col-4 align-self-center'>
                    <img src={calabacin} id='img-calabacin'></img>
                </div>
            </div>

        </div>
    );
}

export default About;