import Axios from "axios";
import React, { useState, useContext, useRef, useEffect } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Alert, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormularioRegistro(props) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [data, setData] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");
  const [showModal, setShowModal] = useState(false);

  const { setUserRole, setUserLoggedIn, setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const alertRef = useRef(null); // Referencia al elemento de la alerta

  useEffect(() => {
    if (showAlert && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAlert]);

  const validateForm = () => {
    if (!nombre || !apellidos || !dni || !email || !contraseña) {
      setAlertMessage("Todos los campos son requeridos");
      setAlertVariant("danger");
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const add = () => {

    if (!validateForm()) {
      return;
    }

    Axios.post("http://localhost:3001/registrar" + props.rol, {
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      email: email,
      contraseña: contraseña
    }).then(response => {
      setData(response.data);
      setUserRole(props.rol);
      setUserLoggedIn(true);
      setUserId(response.data.id);
      console.log("Usuario insertado: " + response.data.id);
      setAlertMessage("Usuario " + response.data.email + " registrado");
      setAlertVariant("success");
      setShowAlert(false);
      setShowModal(true);

      setNombre("");
      setApellidos("");
      setDni("");
      setEmail("");
      setContraseña("");

    }).catch((error) => {
      console.error("Error al registrar el voluntario:", error);
      setAlertMessage(error.response?.data || "Error al registrar el usuario");
      setAlertVariant("danger");
      setShowAlert(true);
    });
  }

  const handleClose = () => {
    setShowModal(false);
    navigate('/recolecta');
  };

  return (
    <div id="div_formulario">
      <section className="form-register">
        <h4>Registro voluntario</h4>
        <input
          onChange={(event) => setNombre(event.target.value)}
          type="text" id="nombres" className="controls" placeholder="Ingresa el nombre"
          value={nombre}
        />
        <input
          onChange={(event) => setApellidos(event.target.value)}
          type="text" id="apellidos" className="controls" placeholder="Ingresa los apellidos"
          value={apellidos}
        />
        <input
          onChange={(event) => setDni(event.target.value)}
          type="text" id="dni" className="controls" placeholder="Ingresa el dni"
          value={dni}
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email" id="email" className="controls" placeholder="Ingresa el email"
          value={email}
        />
        <input
          onChange={(event) => setContraseña(event.target.value)}
          type="password" id="contraseña" className="controls" placeholder="Ingresa la contraseña"
          value={contraseña}
        /><br />
        <button className="botons" onClick={add}>Registrar</button>
      </section>
      <br />
      {showAlert && (
        <Alert ref={alertRef} variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          <strong>{alertVariant === "success" ? "Éxito!" : "Error!"}</strong> {alertMessage}
        </Alert>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Éxito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Usuario registrado con éxito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormularioRegistro;
