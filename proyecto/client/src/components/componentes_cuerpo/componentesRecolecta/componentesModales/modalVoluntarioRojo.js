import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../../contexts/userContext';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarioContext } from "../../../../contexts/calendarioContext";

function ModalVoluntarioRojo(props) {
    const {tipoModal, setTipoModal, showModal, setShowModal, recolectaActual, setRecolectaActual, agricultor, setAgricultor} = useContext(CalendarioContext);
    const {onShow, handleSaveModalVoluntarioRojo, showModalConfirmar, handleCloseModal, handleShowModalConfirmar, handleCloseModalConfirmar} = props;

      
    return (
        <Modal show={showModal} onHide={handleCloseModal} onShow={onShow} size="lg">
            <Modal.Header closeButton>
                <Modal.Title><h2>Recolecta completa. Sin plazas disponibles</h2></Modal.Title>
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
            </Modal.Footer>
        </Modal>
    )
}

export default ModalVoluntarioRojo;