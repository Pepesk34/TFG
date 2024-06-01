import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../contexts/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import ModalCalendario from "./componentesRecolecta/modalCalendario";
import TileContent from "./componentesRecolecta/tileContent";

function Recolecta() {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);
  const [dataUsuario, setDataUsuario] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/selectRecolectas');
      setData(response.data);
    } catch (err) {
      console.error(err.message)
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Solo se ejecuta una vez cuando el componente se monta


  

  const handleDateClick = (value) => {
    setSelectedDate(value);
    console.log('Fecha seleccionada:', value);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const tileContentFunction = ({ date, view }) => {
    return (
      <TileContent date={date} view={view} recolectasTotales={data} recolectasUsuario={dataUsuario}/>
    );
  };


  return (
    <div className="App" id="divrecolecta">
      <h1>Recolectas {userId}</h1>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContentFunction}
      />
      <ModalCalendario showModal={showModal}/>
    </div>
  );
}

export default Recolecta;
