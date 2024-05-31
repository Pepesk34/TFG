import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/agricultor.jpg";
import voluntario from "../imagenes/voluntario.jpg"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./estilos.css"
import Boton from "./Boton.jsx"
import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recolecta() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventos = [
    { fecha: new Date(2024, 4, 2), titulo: 'Evento 1' },
    { fecha: new Date(2024, 4, 6), titulo: 'Evento 2' },
    { fecha: new Date(2024, 4, 30), titulo: 'Evento 3' },
    { fecha: new Date(2024, 5, 8), titulo: 'Evento 4' },
    { fecha: new Date(2024, 5, 9), titulo: 'Evento 5' }
  ];

  const handleDateClick = (value) => {
    setSelectedDate(value);
    console.log('Fecha seleccionada:', value);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventosFiltrados = eventos.filter(evento =>
        evento.fecha.getFullYear() === date.getFullYear() &&
        evento.fecha.getMonth() === date.getMonth() &&
        evento.fecha.getDate() === date.getDate()
      );

      if (eventosFiltrados.length !== 0) {
        return (
          <div className='contenedor'>
            <div className='botones-grid'>
              {eventosFiltrados.map((evento, index) => (
                <Boton
                  key={index}
                  onClick={() => handleShowModal(evento)}
                  tipo=""
                />
              ))}
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Recolectas</h1>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContent}
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent ? selectedEvent.titulo : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent ? `Detalles del evento para el día ${selectedEvent.fecha.toDateString()}` : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Recolecta;
