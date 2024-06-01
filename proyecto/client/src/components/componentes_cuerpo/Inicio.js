import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import '../estilo.css';
import imagen1 from "../imagenes/imagen1.jpg";
import imagen2 from "../imagenes/pepe.jpeg";

const Inicio = () => {
  return (
    <div id='inicio'>
      <h2>INICIO</h2>
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

                        <Link to="/registrarse"><button id="boton_registrar">Registrarse</button></Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Inicio;
