import '../estilo.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/agricultor.jpg";
import voluntario from "../imagenes/voluntario.jpg"
const Registrarse = () => {
    return (
<<<<<<< HEAD
        <div id='divregistrarse'>
            <h2>REGISTRARSE</h2>
            <div id="preguntarol">
                <h3>¿Cual va a ser tu rol?</h3>
            </div>
            <div id='divroles'>
                <div id='rol1'>
=======
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
>>>>>>> 48f6a3d5bfdacd924a3bfe948e3101539c7437a2
                    <Link to="/agricultor">
                        <img id="emoji_agricultor" src={agricultor} />
                    </Link>
<<<<<<< HEAD
                </div>
                <div id='rol2'>
                    <Link to="/voluntario">
                        <img src={voluntario} />
=======
                    <h3 id="h3_agricultor">Agricultor</h3>

                </div>
                <div id="div_voluntario_rol"className='col-xl-6'>
                    <Link to="/voluntario">
                        <img id="emoji_voluntario"src={voluntario} />  
>>>>>>> 48f6a3d5bfdacd924a3bfe948e3101539c7437a2
                    </Link>
                    <h3 id="h3_voluntario">Voluntario</h3>

                </div>

            </div>
        </div>

    );

}
export default Registrarse