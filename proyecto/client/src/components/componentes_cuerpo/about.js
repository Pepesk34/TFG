import '../cabecera.js';
import '../estilos/about-estilo.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className='contenedor' id='about-main'>
            <div className='row about-tomate'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-pimiento'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-berenjena'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-calabacin'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>

        </div>
    );
}

export default About;