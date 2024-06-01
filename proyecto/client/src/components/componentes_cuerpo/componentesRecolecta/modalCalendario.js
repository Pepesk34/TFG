import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../estilos.css"
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalCalendario(props) {
    /*<Modal show={props.showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent ? selectedEvent.titulo : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent ? `Detalles del evento para el día ${selectedEvent.fecha.toDateString()}` : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={props.handleCloseModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      */
}

export default ModalCalendario;