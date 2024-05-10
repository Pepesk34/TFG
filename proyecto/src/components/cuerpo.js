import React from 'react';
import './cabecera.css';
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/pepe.jpeg";
const Cuerpo = () => {
    return (
        <div>
            <script>
                
            </script>
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
                        <h5>Somos una plataforma que conecta a dedicados agricultores de la región de Almeria con
                            personas voluntarias que desean contribuir a una causa noble: reducir el desperdicio de
                            alimentos y ayudar a quienes lo necesitan. Nosotros creemos en un mundo donde cada alimento
                            cuenta, donde cada gesto de generosidad tiene un impacto real.</h5>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div id="divimagen2">
                        <img id="imagen2" src={imagen2}></img>
                    </div>
                    <div id="image-data2">
                        <h5>
                            <div id="divreferencia"></div>
                            Según estima la FAO, los alimentos que se pierden y desperdician podrían alimentar a <b>1 260 millones</b><br /> de personas hambrientas cada año.
                        </h5>

                    </div>

                </div>
            </div>

            <div id="InicioSesion"></div>


        </div>
    );
}
export default Cuerpo;