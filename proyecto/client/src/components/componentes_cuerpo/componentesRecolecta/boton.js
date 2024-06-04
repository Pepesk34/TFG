/*import 'bootstrap/dist/css/bootstrap.min.css'; */
import "../boton.css"
import tomate from "../../imagenes/tomato.png"
import pimiento from "../../imagenes/pimiento.webp"
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../../contexts/userContext';

function Boton(props) {

    const { userRole, userLoggedIn, userId } = useContext(UserContext);

    const { key, tipo, handleOnClickBoton, hora, pasarRecolecta, filaActual } = props;

    const handleClick = () => {
        if(userRole === 'V') {
        handleOnClickBoton();
        pasarRecolecta(filaActual);
        } else if(userRole === 'A') {
            
        } else {
            console.error("No es no A ni V")
        }
        
    }

    const handleTipo = () => {

    }

    return (
        <div className="mb-1 row filaTile" onClick={handleClick}>
            <div className={`col-1 ${tipo} text-dark`}></div>
            <div className="col ps-1 div-11">
                <div className="row">
                    <div className="col-1 hora">{props.hora}</div>
                    <div className="col">
                        {filaActual.hortaliza === 'Pimiento' ? <img src={pimiento} width={"24px"}></img> : null}
                        {filaActual.hortaliza === 'Tomate' ? <img src={tomate} width={"17px"}></img> : null}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Boton;