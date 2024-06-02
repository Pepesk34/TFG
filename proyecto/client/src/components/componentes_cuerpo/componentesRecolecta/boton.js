import React from "react";
/*import 'bootstrap/dist/css/bootstrap.min.css'; */
import "../boton.css"
import tomate from "../../imagenes/tomato.png"

function Boton(props) {
    
    return(
        <button type="button" className="btn btn-circle" onClick={props.handleShowModal} style={{border: "4px solid rgb(39, 227, 30)"}}>
            <img src={tomate} alt="Imagen Redondeada" />
        </button>
    )
}

export default Boton;