import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalCalendario(props) {

  const onSave = () => {
    //handleClose e insetar una instancia en volutarios_recolectas

    props.handleSaveModal();
    props.handleCloseModal();
  }
    return(
    <Modal show={props.showModal} onHide={props.handleCloseModal} onShow={props.onShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title><h2>Título del modal</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>id de recolecta: {props.recolecta.id}</p>
          <p>Hortaliza: {props.recolecta.hortaliza}</p>
          <p>Nombre Agricultor: {props.agricultor.nombre} {props.agricultor.apellidos}.</p>
          <p>Teléfono Agricultor: {props.agricultor.telefono}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSave}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalCalendario;