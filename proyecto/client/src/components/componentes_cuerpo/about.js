import '../cabecera.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';

function About() {
    return(
        <div className='contenedor' id='about-main'>
            <div className='row about-fruta'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-fruta'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-fruta'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>
            <div className='row about-fruta'>
                <div className='col-6'>
                    <h1>HOLA</h1>
                </div>
            </div>

        </div>
    );
}

export default About;