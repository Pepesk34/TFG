import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalAgricultor(props) {
  return(
    <Modal show={props.showModal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          body
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
      )
}

export default ModalAgricultor;