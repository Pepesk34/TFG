import React from "react";
/*import 'bootstrap/dist/css/bootstrap.min.css'; */
import "../boton.css"
import tomate from "../../imagenes/tomato.png"

function Boton(props) {

    const { key, tipo, handleShowModal, hora, pasarRecolecta, filaActual } = props;

    const fila = filaActual;

    const handleClick = () => {
        handleShowModal();
        pasarRecolecta(fila);
    }

    const handleTipo = () => {

    }

    return (
        <div className="mb-1 row filaTile" onClick={handleClick}>
            <div className={`col-1 ${tipo} text-dark`}></div>
            <div className="col div-11">
                <div className="row">
                    <div className="col-1">{props.hora}</div>
                    <div className="col">buenas</div>
                </div>
            </div>
        </div>
    )
}

export default Boton;