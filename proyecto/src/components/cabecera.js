import React from 'react';
import './cabecera.css';
import logo from "./logo1.jpg";
const Cabecera = () =>{
    return(
        <div>
            <div id="divlogo">
            <img id="logo"src={logo}></img>
            </div>
            <div id="apartados">
                <a>INICIO</a>
                
            </div>
                
            
        </div>
    );
}
export default Cabecera