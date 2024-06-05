import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalAgricultor(props) {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);

  const [showModalConfirmar, setShowModalConfirmar] = useState(false);

  const [kilos, setKilos] = useState("");
  const [maxNumVoluntarios, setMaxNumVoluntarios] = useState("");
  const [fecha, setFecha] = useState("");
  const [localizacion, setLocalizacion] = useState("");

  const onSave = () => {
    //handleClose e insetar una instancia en volutarios_recolectas
    handleCloseModalConfirmar();
    props.handleSaveModalCelda();
    props.handleCloseModal();
    props.setRecolectaAdd({kilos, maxNumVoluntarios, fecha, localizacion, userId})
  }
  const handleCloseModalConfirmar = () => {
    setShowModalConfirmar(false);
  }
  const handleShowModalConfirmar = () => {
    setShowModalConfirmar(true);
  }

  return (
    <>
      <Modal show={props.showModal && userRole === 'A'} onHide={props.handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crea una recolecta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Formulario para crear una recolecta
          <input
          onChange={(event) => setKilos(event.target.value)}
          type="text" id="nombres" className="controls" placeholder="Ingresa el Kilos"
          value={kilos}
        />
        <input
          onChange={(event) => setMaxNumVoluntarios(event.target.value)}
          type="text" id="apellidos" className="controls" placeholder="Ingresa los MaxsetMaxNumVoluntarios"
          value={maxNumVoluntarios}
        />
        <input
          onChange={(event) => setFecha(event.target.value)}
          type="text" id="dni" className="controls" placeholder="Ingresa el Fecha"
          value={fecha}
        />
        <input
          onChange={(event) => setLocalizacion(event.target.value)}
          type="tel" id="telefono" className="controls" placeholder="Ingresa tu Localizacion"
          value={localizacion}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleShowModalConfirmar}>
            Subir recolecta
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalConfirmar} onHide={handleCloseModalConfirmar}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas realizar esta acción?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalConfirmar}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onSave}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalAgricultor;