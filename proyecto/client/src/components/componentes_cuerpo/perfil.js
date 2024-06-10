import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";


function Perfil() {

    const { setUserRole, setUserLoggedIn, setUserId } = useContext(UserContext);
    const navigate = useNavigate();

    const cerrarSesion = () =>  {
        setUserId(null);
        setUserLoggedIn(false);
        setUserRole(null);
        navigate("/inicio")
    }
    return(
        <Button onClick={cerrarSesion}>Cerrar sesión</Button> 
        )
}

export default Perfil;