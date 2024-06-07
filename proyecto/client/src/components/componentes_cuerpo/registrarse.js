import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/imagen3.jpg";
import voluntario from "../imagenes/voluntario.jpg";
import { useEffect } from "react";
import '../estilos/registrarse-estilo.css';


const Registrarse = () => {

    useEffect(() => {
        window.scrollTo(0, 230);
    }, []);


    return (
        <div id="registrarse-div">
            <div className='row'>
                <div className='col-xl-12'>
                    <div>
                        <h1>¿Cuál va a ser tu rol?</h1>
                    </div>

                </div>
            </div>

            <div className='row' id="opciones-registrarse">

                <div className='col-5'>
                    <h3 id="h3-agricultor">Agricultor</h3>
                    <div className="container-carta">
                        <div className="carta">
                            <div className="carta-front">
                                <Link to="/agricultor">
                                    <img id="emoji-agricultor" src={agricultor} />
                                </Link>
                            </div>
                            <div className="carta-back">
                                <Link to="/agricultor" className="links">
                                    <div className="align-self-center">
                                        <h3>
                                            ¿QUÉ HACE EL AGRICULTOR?
                                        </h3>
                                        <br></br>
                                        <h5>
                                            Los agricultores pueden acceder al calendario y programar nuevas recolectas de alimentos. Para ello, seleccionan un día en el calendario,
                                            completan la información necesaria sobre la recolecta (ubicación, tipo de alimento, cantidad, etc.), y publican la recolecta en la plataforma.
                                            Los agricultores pueden ver todas las recolectas programadas en el calendario, pero solo podrán ver la información de las recolectas, sin la opción de apuntarse a ellas.
                                        </h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                </div>
                <div className='col-5'>
                    <h3 id="h3-voluntario">Voluntario</h3>
                    <div className="container-carta">
                        <div className="carta">
                            <div className="carta-front">
                                <Link to="/voluntario">
                                    <img id="emoji-voluntario" src={voluntario} />
                                </Link>
                            </div>
                            <div className="carta-back">
                                <Link to="/voluntario" className="links">
                                    <div className="img-descripcion">
                                        <h3>
                                            ¿QUÉ HACE EL VOLUNTARIO?
                                        </h3>
                                        <br></br>
                                        <h5>
                                        Los voluntarios pueden acceder al calendario de recolectas y ver todas las programadas. Las recolectas disponibles (con plazas libres)
                                         aparecerán en color verde. Al seleccionar una recolecta disponible, se abrirá un modal con la información detallada y la opción para inscribirse.
                                         Los voluntarios también pueden ver todas las recolectas programadas. Las recolectas completas (sin plazas libres) aparecerán en color rojo,
                                          y las recolectas en las que están inscritos aparecerán en color azul.
                                        </h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

}
export default Registrarse