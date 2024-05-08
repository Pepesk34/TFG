import React from 'react';
import './cabecera.css';
import imagen1 from "./imagen1.jpg";
const Cuerpo = () => {
    return (
        <div>
            <div id="fila1" class="row">
                <div class="col-xl-6">
                    <div id="divimagen1">
                        <img id="imagen1" src={imagen1}></img>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div id="image-data">
                        <h2>GREEN BOYD HOUSE</h2>
                        <br></br>
                        <h5>Somos una plataforma que conecta a dedicados agricultores de la región de Almeria con personas voluntarias que desean contribuir a una causa noble: reducir el desperdicio de alimentos y ayudar a quienes lo necesitan. Nosotros creemos en un mundo donde cada alimento cuenta, donde cada gesto de generosidad tiene un impacto real.</h5>
                    </div>
                </div>
            </div>
            




        </div>
    );
}
export default Cuerpo;