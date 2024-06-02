
import 'react-calendar/dist/Calendar.css';
import "../estilos.css"
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './boton';

function TileContent(props) {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);
  const { view, data, dataUsuario, handleShowModal, date } = props;
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
          } else if (userRole === 'V') {
            console.log("Entra en userRola = V")

            const botonUsuario = dataUsuario.find(filaUsuario => {
              const idRecolectaUsuario = filaUsuario.id;

              const comprobarFechaUsuario = () => {
                return idRecolecta === idRecolectaUsuario;
              }

              return comprobarFechaUsuario();
            });

            if (botonUsuario) {
              console.log("Entra en el primer return")
              return (<>

                <h1>Comprobar</h1> <Boton
                  key={fila.id}
                  color="azul"
                  handleShowModal={handleShowModal}
                />
              </>

              );
            } else {
              console.log("Entra en el segundo return")
              return (
                <Col key={fila.id} xs={12}>
              <Boton
                color="azul"
                handleShowModal={handleShowModal}
              />
            </Col>  
              );
            }
          } else {
            console.log("Entra aquí?")
            return (<Col key={fila.id} xs={12}>
              <Boton
                color="azul"
                handleShowModal={handleShowModal}
              />
            </Col>

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
  return(
    <div>
      <div className="container">
    <div className="row fila">
      <div className="col">
     
        <div className="p-1 mb-1 bg-secondary text-white">Div Hijo 1</div>
        
      
        <div className="p-1 mb-1 bg-success text-white">Div Hijo 2</div>
        
     
        <div className="p-1 bg-danger text-white">Div Hijo 3</div>
      </div>
    </div>
  </div>
    </div>
  )
}


export default TileContent;