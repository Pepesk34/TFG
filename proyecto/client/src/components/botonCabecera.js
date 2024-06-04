import React from "react";
import './estilos/recolecta-estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function BotonCabecera(props) {
    return (
        <Link to={props.link}><button onClick={props.click} className="btn btn-secondary">{props.nombre}</button></Link>
    );
}

export default BotonCabecera;
