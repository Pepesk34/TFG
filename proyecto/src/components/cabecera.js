import React from 'react';
import './cabecera.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecera = () => {
    return (
        <div>
            <div  class="row">
                <div class="col-xl-6">
                    <div id="divlogo">
                        <img id="logo" src={logo}></img>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div id="apartados">
                        <h5>
                            <a id="inicio">INICIO</a>
                            <a id="suporte">SOPORTE</a>
                            <a id="ayuda">AYUDA</a>
                            <a id="iniciosesion">INICIAR SESIÓN</a>
                        </h5>

                    </div>
                </div>
            </div>





        </div>
    );
}
export default Cabecera