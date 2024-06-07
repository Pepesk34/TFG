// import 'react-calendar/dist/Calendar.css';
import '../../estilos/recolecta-estilo.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './boton';
import { RecolectasContext } from "../../../contexts/recolectasContext";

function TileContent(props) {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);
  const { view, date, recolectasCompletas, pasarRecolecta } = props;

  const { data, setData, dataUsuario, setDataUsuario } = useContext(RecolectasContext);
  const fechaActual = new Date();
  fechaActual.setHours(0, 0, 0, 0);

  if (!data) {
    return <>
      <h1>Comprobar</h1> <Boton
        key={2}
        color="azul"
      />
    </>; // Opcionalmente, puedes mostrar un indicador de carga aquí
  }

  const renderBoton = () => {
    if (view === 'month' && data) {
      return data.map((fila) => {

        const fechaFila = new Date(fila.fecha);
        var hours = fechaFila.getHours();
        var minutes = fechaFila.getMinutes();

        var hora = `${hours}:${minutes === 0 ? '00' : minutes}`
        fechaFila.setHours(0, 0, 0, 0);

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
          document.getElementsByClassName("react-calendar__tile")
          if (fechaFila > fechaActual) {
            if (userRole === 'A') {
              if (userId === fila.id_agricultor) {
                //azul
                return (
                  <Boton
                    key={fila.id}
                    tipo="azul"
                    hora={hora}
                    pasarRecolecta={pasarRecolecta}
                    filaActual={fila}
                  />
                );
              } else {
                //gris
                return (
                  <Boton
                    key={fila.id}
                    tipo="gris"
                    hora={hora}
                    pasarRecolecta={pasarRecolecta}
                    filaActual={fila}
                  />
                );
              }
            } else if (userRole === 'V') {


              const usuarioApuntado = dataUsuario.find(filaUsuario => {
                const idRecolectaUsuario = filaUsuario.id;

                const comprobarFechaUsuario = () => {
                  return idRecolecta === idRecolectaUsuario;
                }

                return comprobarFechaUsuario();
              });

              if (usuarioApuntado) { // Usuario apuntado a recolecta AZUL
                return (

                  <Boton
                    key={fila.id}
                    tipo="azul"

                    hora={hora}
                    pasarRecolecta={pasarRecolecta}
                    filaActual={fila}
                  />
                );

              } else { //Usuario no apuntado a recolecta

                let recolectaCompleta = recolectasCompletas.find(recolecta => {
                  return recolecta.id === fila.id;
                })

                if (recolectaCompleta) { //En rojo

                  return (
                    <Boton
                      key={fila.id}
                      tipo="rojo"

                      hora={hora}
                      pasarRecolecta={pasarRecolecta}
                      filaActual={fila}
                    />
                  );
                } else { // En verde

                  return (
                    <Boton
                      key={fila.id}
                      tipo="verde"
                      hora={hora}
                      pasarRecolecta={pasarRecolecta}
                      filaActual={fila}
                    />
                  );
                }

              }
            } else {
              console.log("Entra aquí?")
              // return (
              //   <Boton
              //     key={fila.id}
              //     tipo="azul"
              //     ={}
              //     hora={hora}
              //     pasarRecolecta={pasarRecolecta}
              //     filaActual={fila}
              //   />
              // );
            }
          } else {
            return (
              <Boton
                    key={fila.id}
                    tipo="gris"
                    hora={hora}
                    pasarRecolecta={pasarRecolecta}
                    filaActual={fila}
                  />
            )
          }

        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  }
  return (
    <div>
      <div className="container contenedor">
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