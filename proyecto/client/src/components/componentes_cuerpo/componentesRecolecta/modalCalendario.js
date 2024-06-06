import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarioContext } from "../../../contexts/calendarioContext";
import ModalAgricultorAzul from "./componentesModales/modalAgricultorAzul";
import ModalGris from "./componentesModales/modalGris";
import ModalVoluntarioAzul from "./componentesModales/modalVoluntarioAzul";
import ModalVoluntarioRojo from "./componentesModales/modalVoluntarioRojo";
import ModalVoluntarioVerde from "./componentesModales/modalVoluntarioVerde";

function ModalCalendario(props) {

  const {tipoModal, setTipoModal, showModal, setShowModal, recolectaActual, setRecolectaActual, agricultor, setAgricultor} = useContext(CalendarioContext);

  const { userRole, userLoggedIn, userId } = useContext(UserContext);

  const [showModalConfirmar, setShowModalConfirmar] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleCloseModalConfirmar = () => {
    setShowModalConfirmar(false);
  }
  const handleShowModalConfirmar = () => {
    setShowModalConfirmar(true);
  }

  const handleSaveModal = () => {
  }

  return (
    <>
      {userRole === 'A' && tipoModal === 'azul' && showModal ? <ModalAgricultorAzul onShow={props.onShow} handleSaveModalAgricultorAzul={props.handleSaveModalAgricultorAzul} showModalConfirmar={showModalConfirmar} handleCloseModal={handleCloseModal} handleShowModalConfirmar={handleShowModalConfirmar} handleCloseModalConfirmar={handleCloseModalConfirmar}/> : null}
      {userRole === 'V' && tipoModal === 'azul' && showModal ? <ModalVoluntarioAzul onShow={props.onShow} handleSaveModalVoluntarioAzul={props.handleSaveModalVoluntarioAzul} showModalConfirmar={showModalConfirmar} handleCloseModal={handleCloseModal} handleShowModalConfirmar={handleShowModalConfirmar} handleCloseModalConfirmar={handleCloseModalConfirmar}/> : null}
      {userRole === 'V' && tipoModal === 'rojo' && showModal ? <ModalVoluntarioRojo onShow={props.onShow} handleSaveModalVoluntarioRojo={props.handleSaveModalVoluntarioRojo} handleCloseModal={handleCloseModal} /> : null}
      {userRole === 'V' && tipoModal === 'verde' && showModal ? <ModalVoluntarioVerde onShow={props.onShow} handleSaveModalVoluntarioVerde={props.handleSaveModalVoluntarioVerde} showModalConfirmar={showModalConfirmar} handleCloseModal={handleCloseModal} handleShowModalConfirmar={handleShowModalConfirmar} handleCloseModalConfirmar={handleCloseModalConfirmar}/> : null}
      {tipoModal === 'gris' && showModal ? <ModalGris onShow={props.onShow} handleSaveModalGris={props.handleSaveModalGris} handleCloseModal={handleCloseModal}/> : null}
    </>

  )
}

export default ModalCalendario;