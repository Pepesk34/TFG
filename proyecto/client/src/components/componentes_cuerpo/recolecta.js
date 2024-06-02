import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../contexts/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import ModalCalendario from "./componentesRecolecta/modalCalendario";
import ModalAgricultor from "./componentesRecolecta/modalAgricultor";
import TileContent from "./componentesRecolecta/tileContent";

function Recolecta() {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showModalAgricultor, setShowModalAgricultor] = useState(false);

  const [data, setData] = useState([]);
  const [dataUsuario, setDataUsuario] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/selectRecolectas');
      console.log("Response.data de selectRecolectas: " + response.data);
      console.log(response.data)
      await setData(response.data);
    } catch (err) {
      console.error(err.message)
    }
  };

  const fetchDataUsuario = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/selectRecolectasUsuario?userId=${userId}`);
      console.log("Response.data de selectRecolectasUsuario: " + response.data);
      console.log(response.data);
      setDataUsuario(response.data);
    } catch (err) {
      console.error(err.message)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  useEffect(() => {
    if (userId) {
      fetchDataUsuario();
    }
  }, [userId]); // Se ejecuta cuando userId cambia

  const handleDateClick = (value) => {
    setSelectedDate(value);
    console.log('Fecha seleccionada:', value);
    handleShowModalAgricultor();
  };

  const handleShowModalAgricultor = () => {
    console.log('Entra en handleShowModalAgricultor')
    setShowModalAgricultor(true);
  }
  const handleCloseModalAgricultor = () => setShowModalAgricultor(false);

  const handleShowModal = () => {
    console.log("Entra en handleShowModal");
    setShowModal(true);
  }
  const handleCloseModal = () => {
    console.log("Entra en handleCloseModal");
      setShowModal(false);
  }


  const tileContentFunction = ({ date, view }) => {
    return (
      <TileContent date={date} view={view} data={data} dataUsuario={dataUsuario} handleShowModal={handleShowModal} />
    );
  };

  return (
    <div className="App" id="divrecolecta">
      <h1>Recolectas {userId} {userRole}</h1>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContentFunction}
      />
      <ModalCalendario showModal={showModal} handleCloseModal={handleCloseModal}/>
      <ModalAgricultor showModal={showModalAgricultor}  handleCloseModal={handleCloseModalAgricultor}/>
    </div>
  );
}

export default Recolecta;
