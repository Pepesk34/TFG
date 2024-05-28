import React from "react";
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function BotonCabecera(props) {
    return (
        <Link to={props.link}><button className="btn btn-secondary">{props.nombre}</button></Link>
       
            
    );
}

export default BotonCabecera;
