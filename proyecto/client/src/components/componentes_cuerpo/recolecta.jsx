import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import agricultor from "../imagenes/agricultor.jpg";
import voluntario from "../imagenes/voluntario.jpg"
import Calendar from "react-calendar";


import 'react-calendar/dist/Calendar.css';
import "./estilos.css"
import Boton from "./Boton.jsx"
import React, { useState } from "react";

function Recolecta() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date().getDay;

  // Definir el array de fechas con objetos
  const eventos = [
    { fecha: new Date(2024, 4, 2), titulo: 'Evento 1' }, // 02/05/2023
    { fecha: new Date(2024, 4, 6), titulo: 'Evento 2' }, // 06/05/2023
    { fecha: new Date(2024, 4, 6), titulo: 'Evento 2' }, // 06/05/2023
    { fecha: new Date(2024, 4, 6), titulo: 'Evento 2' }, // 06/05/2023
    { fecha: new Date(2024, 4, 30), titulo: 'Evento 3' }, // 30/05/2023
    { fecha: new Date(2024, 5, 8), titulo: 'Evento 4' }, // 08/06/2023
    { fecha: new Date(2024, 5, 9), titulo: 'Evento 5' }  // 09/06/2023
  ];

  const eventos2 = [
    { fecha: new Date(2024, 4, 30), titulo: 'Evento 3' }, // 30/05/2023
    { fecha: new Date(2024, 5, 9), titulo: 'Evento 5' }  // 09/06/2023
  ];

  const handleDateClick = (value) => {
    setSelectedDate(value);
    console.log('Fecha seleccionada:', value);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // Verificar si la fecha está en el array de eventos
      const eventosFiltrados = eventos.filter(evento =>
        evento.fecha.getFullYear() === date.getFullYear() &&
        evento.fecha.getMonth() === date.getMonth() &&
        evento.fecha.getDate() === date.getDate()
      );

      if (eventosFiltrados.length != 0) {

        /*const evento2 = eventos2.find(evento2 =>
          evento2.fecha.getFullYear() === evento.fecha.getFullYear() &&
          evento2.fecha.getMonth() === evento.fecha.getMonth() &&
          evento2.fecha.getDate() === evento.fecha.getDate()
        );*/
        /*
        if (evento2) { //Las fechas de los dos arrays son iguales ? La recolecta está incompleta ? verde : rojo : azul
        } */
        console.log("entra dentro");
        return (

          <div className='contenedor'>
            <div className='botones-grid'>
              {eventosFiltrados.map((evento, index) => (
                <Boton
                  key={index}
                  onClick={() => alert(`Evento: ${evento.titulo} en ${date.toDateString()}`)}
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
    <div className="App" id="divrecolecta">
      <h1>Recolectas</h1>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
}

export default Recolecta;