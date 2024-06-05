import Calendar from "react-calendar";
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalAgricultor(props) {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);

  const [showModalConfirmar, setShowModalConfirmar] = useState(false);

  const [kilos, setKilos] = useState("");
  const [maxNumVoluntarios, setMaxNumVoluntarios] = useState("");
  const [hora, setHora] = useState("");
  const [localizacion, setLocalizacion] = useState("");
  const [hortalizas, setHortalizas] = useState([]);

  const fechita = props.selectedDate.getFullYear() + "-" + (props.selectedDate.getMonth() + 1) + "-" + props.selectedDate.getDate();

  const onSave = () => {
    //handleClose e insertar una instancia en volutarios_recolectas
    const fechaCompleta = fechita + " " + hora;
    handleCloseModalConfirmar();
    // props.handleSaveModalCelda();
    props.handleCloseModal();
    props.setRecolectaAdd({kilos, maxNumVoluntarios, fechaCompleta, localizacion, userId, hortalizas});
  }

  const handleCloseModalConfirmar = () => {
    setShowModalConfirmar(false);
  }

  const handleShowModalConfirmar = () => {
    setShowModalConfirmar(true);
  }

  const handleHortalizaChange = (event) => {
    const { value } = event.target;
    setHortalizas((prev) => {
      if (prev.includes(value)) {
        // Si la hortaliza ya está seleccionada, la quitamos
        return prev.filter(h => h !== value);
      } else if (prev.length < 3) {
        // Si no está seleccionada y el número de hortalizas es menor que 3, la añadimos
        return [...prev, value];
      } else {
        return prev;
      }
    });
  };

  const hortalizasDisponibles = ["pimiento", "tomate", "berenjena", "calabacin"];

  return (
    <>
      <Modal show={props.showModal && userRole === 'A'} onHide={props.handleCloseModal} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Crea una recolecta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Kilos:</label>
            <input
              onChange={(event) => setKilos(event.target.value)}
              type="text" id="kilos" className="controls" placeholder="Ingresa el Kilos"
              value={kilos}
            />
          </div>
          <div>
            <label>Max. Número de Voluntarios:</label>
            <input
              onChange={(event) => setMaxNumVoluntarios(event.target.value)}
              type="text" id="maxNumVoluntarios" className="controls" placeholder="Ingresa el número máximo de voluntarios"
              value={maxNumVoluntarios}
            />
          </div>
          <div>
            <label>Ingresa la hora para el día {fechita}:</label>
            <input
              onChange={(event) => setHora(event.target.value)}
              type="text" id="hora" className="controls" placeholder="Ingresa la hora"
              value={hora}
            />
          </div>
          <div>
            <label>Localización:</label>
            <input
              onChange={(event) => setLocalizacion(event.target.value)}
              type="tel" id="localizacion" className="controls" placeholder="Ingresa la localización"
              value={localizacion}
            />
          </div>
          <div class="form-check">
            <label><h4>Hortalizas:</h4></label>
            {hortalizasDisponibles.map((hortaliza, index) => (
              <div key={hortaliza}>
                <input
                  type="checkbox"
                  value={hortaliza}
                  checked={hortalizas.includes(hortaliza)}
                  onChange={handleHortalizaChange}
                  className="form-check-input shadow border border-secondary" 
                  id={index}
                />
                <label for={index}>{hortaliza.toUpperCase()}</label>
              </div>
            ))}
            <p>Seleccionadas: {hortalizas.join(', ')}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleShowModalConfirmar}>
            Subir recolecta
          </Button>
        </Modal.Footer>
      </Modal>

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
          <Button variant="primary" onClick={onSave}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAgricultor;
