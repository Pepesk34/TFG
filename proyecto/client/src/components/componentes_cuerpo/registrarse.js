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

            <div id="opciones-registrarse" className='row'>

                <div className='col-xl-6'>
                    <h3 id="h3-agricultor">Agricultor</h3>
                    <div className="container-carta">
                        <div className="carta">
                            <div className="carta-front">
                                <Link to="/agricultor">
                                    <img id="emoji-agricultor" src={agricultor} />
                                </Link>
                            </div>
                            <div className="carta-back">
                                <Link to="/agricultor">
                                    <div className="img-descripcion">El agricultor cultiva y proporciona alimentos frescos.</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-xl-6'>
                    <h3 id="h3-voluntario">Voluntario</h3>
                    <div className="container-carta">
                        <div className="carta">
                            <div className="carta-front">
                                <Link to="/voluntario">
                                    <img id="emoji-voluntario" src={voluntario} />
                                </Link>
                            </div>
                            <div className="carta-back">
                                <Link to="/voluntario">
                                    <div className="img-descripcion">El voluntario ayuda a recolectar y distribuir alimentos.</div>
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