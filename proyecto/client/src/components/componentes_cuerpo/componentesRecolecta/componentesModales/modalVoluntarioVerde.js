import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../../contexts/userContext';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarioContext } from "../../../../contexts/calendarioContext";

function ModalVoluntarioVerde(props) {

    
  const {tipoModal, setTipoModal, showModal, setShowModal, recolectaActual, setRecolectaActual, agricultor, setAgricultor} = useContext(CalendarioContext);
    const {onShow, handleSaveModalVoluntarioVerde, showModalConfirmar, handleCloseModal, handleShowModalConfirmar, handleCloseModalConfirmar} = props;

    const onSave = () => {
        //handleClose e insetar una instancia en volutarios_recolectas
        handleCloseModalConfirmar();
        handleSaveModalVoluntarioVerde();
        handleCloseModal();
      }

    return (
        <Modal show={showModal} onHide={handleCloseModal} onShow={onShow} size="lg">
            <Modal.Header closeButton>
                <Modal.Title><h2>¡Apúntate a esta recolecta!</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>id de recolecta: {recolectaActual.id}</p>
                <p>Localización: {recolectaActual.localizacion}</p>
                <p>Hortaliza: {recolectaActual.hortaliza}</p>
                <p>Nombre Agricultor: {agricultor.nombre} {agricultor.apellidos}.</p>
                <p>Teléfono Agricultor: {agricultor.telefono}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>
                <Button variant="success" onClick={handleShowModalConfirmar}>
                    Me apunto
                </Button>

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
                        <Button variant="success" onClick={onSave}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalVoluntarioVerde;