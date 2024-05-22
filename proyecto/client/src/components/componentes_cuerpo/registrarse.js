import '../estilo.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/agricultor.jpg";
import voluntario from "../imagenes/voluntario.jpg"
const Registrarse = () => {
    return (
        <div id="registrarse_div">
            <div className='row'>
                <div className='col-xl-12'>
                    <div id="pregunta_rol">
                        <h1>¿Cuál va a ser tu rol?</h1>
                    </div>

                </div>
            </div>
            <div id="opciones_registrarse" className='row'>
                <div id="div_agricultor_rol" className='col-xl-6'>
                    <Link to="/agricultor">
                        <img id="emoji_agricultor" src={agricultor} />
                    </Link>
                    <h3 id="h3_agricultor">Agricultor</h3>

                </div>
                <div id="div_voluntario_rol"className='col-xl-6'>
                    <Link to="/voluntario">
                        <img id="emoji_voluntario"src={voluntario} />  
                    </Link>
                    <h3 id="h3_voluntario">Voluntario</h3>

                </div>
            </div>
        </div>

    );

}
export default Registrarse