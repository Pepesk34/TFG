import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonCabecera from './botonCabecera';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function Cabecera(props) {
    return (
        <div id="cabecera">
            <div class="row">
                <div class="col-xl-6">
                    <div id="divlogo">
                        <img id="logo" src={logo}></img>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div id="apartados">
                        <h5>
                            <BotonCabecera link="/inicio" nombre="INICIO"/>
                            <BotonCabecera
                                link="/registrarse"
                                nombre="REGÍSTRATE"
                            />
                            <BotonCabecera
                                link="/recolecta"
                                nombre="Recolecta"
                            />
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