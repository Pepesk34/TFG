import '../estilo.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/agricultor.png";
import voluntario from "../imagenes/voluntario.png"
const Registrarse = () => {
    return (
        <div id='divregistrarse'>
            <h2>REGISTRARSE</h2>
            <div id="preguntarol">
                <h3>¿Cual va a ser tu rol?</h3>
            </div>
            <div id='divroles'>
                <div id='rol1'>
                    <Link to="/agricultor">
                        <img src={agricultor} />
                    </Link>
                </div>
                <div id='rol2'>
                    <Link to="/voluntario">
                        <img src={voluntario} />
                    </Link>
                    
                </div>

            </div>
        </div>

    );

}
export default Registrarse