
// import 'react-calendar/dist/Calendar.css';
import "../estilos.css"
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './boton';

function TileContent(props) {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);
  const { view, data, dataUsuario, handleShowModal, date, recolectasCompletas } = props;

  if (!data) {
    return <>
      <h1>Comprobar</h1> <Boton
        key={2}
        color="azul"
        onClick={handleShowModal}
      />
    </>; // Opcionalmente, puedes mostrar un indicador de carga aquí
  }

  const renderBoton = () => {
    if (view === 'month') {
      return data.map((fila) => {

        const fechaFila = new Date(fila.fecha);

        var hours = fechaFila.getHours();
        var minutes = fechaFila.getMinutes();

        var hora = `${hours}:${minutes}`

        const idRecolecta = fila.id;

        const comprobarFechaCalendario = () => {
          const añoFila = fechaFila.getFullYear();
          const mesFila = fechaFila.getMonth();
          const diaFila = fechaFila.getDate();

          const añoCalendario = date.getFullYear();
          const mesCalendario = date.getMonth();
          const diaCalendario = date.getDate();

          return (
            añoFila === añoCalendario &&
            mesFila === mesCalendario &&
            diaFila === diaCalendario
          );
        };

        if (comprobarFechaCalendario()) {
          console.log("Entra en comprobarFechaCalendario");
          if (userRole === 'A') {
            if (userId === fila.id_agricultor) {
              //azul
            } else {
              //gris
            }
          } else if (userRole === 'V') {
            console.log("Entra en userRola = V")

            const usuarioApuntado = dataUsuario.find(filaUsuario => {
              const idRecolectaUsuario = filaUsuario.id;

              const comprobarFechaUsuario = () => {
                return idRecolecta === idRecolectaUsuario;
              }

              return comprobarFechaUsuario();
            });

            if (usuarioApuntado) { //Usuario apuntado a recolecta
              console.log("Entra en el primer return")
              return (
                <Boton
                  key={fila.id}
                  tipo="azul"
                  handleShowModal={handleShowModal}
                  hora={hora}
                />
              );
            } else { //Usuario no apuntado a recolecta
              console.log("Entra en el segundo return")

              let recolectaCompleta = recolectasCompletas.find(recolecta => {
                return recolecta.id === fila.id;
              })

              if (recolectaCompleta) { //En rojo
                console.log("Entra en rojo cuyo maxNumVoluntarios es " + fila.maxnumvoluntarios)
                return (
                  <Boton
                    key={fila.id}
                    tipo="rojo"
                    handleShowModal={handleShowModal}
                    hora={hora}
                  />
                );
              } else { // En verde
                console.log("Entra en verde cuyo maxNumVoluntarios es " + fila.maxnumvoluntarios)
                return (
                  <Boton
                    key={fila.id}
                    tipo="verde"
                    handleShowModal={handleShowModal}
                    hora={hora}
                  />
                );
              }

            }
          } else {
            console.log("Entra aquí?")
            return (
              <Boton
                key={fila.id}
                tipo="azul"
                handleShowModal={handleShowModal}
                hora={hora}
              />
            );
          }
        } else {
          console.log("NO entra en comprobarFechaCalendario");
          return null;
        }
      });
    } else {
      return null;
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row fila">
          <div className="col columna">
            {renderBoton()}
          </div>
        </div>
      </div>
    </div>

  )
}


export default TileContent;