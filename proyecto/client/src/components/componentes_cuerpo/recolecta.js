import Calendar from "react-calendar";
import '../estilos/recolecta-estilo.css';
// import 'react-calendar/dist/Calendar.css';
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../contexts/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import ModalCalendario from "./componentesRecolecta/modalCalendario";
import ModalAgricultor from "./componentesRecolecta/modalAgricultor";
import TileContent from "./componentesRecolecta/tileContent";
import { RecolectasContext } from "../../contexts/recolectasContext";
import { CalendarioContext } from "../../contexts/calendarioContext";

function Recolecta() {

  const { userRole, userLoggedIn, userId } = useContext(UserContext);
  const { data, setData, dataUsuario, setDataUsuario } = useContext(RecolectasContext);

  const {tipoModal, setTipoModal, showModal, setShowModal, recolectaActual, setRecolectaActual, agricultor, setAgricultor} = useContext(CalendarioContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModalAgricultor, setShowModalAgricultor] = useState(false);
  const [recolectasCompletas, setRecolectasCompletas] = useState([]);
  const [saveModalVoluntarioVerde, setSaveModalVoluntarioVerde] = useState(false);
  const [recolectaAdd, setRecolectaAdd] = useState({});


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/selectRecolectas');
      console.log("Response.data de selectRecolectas: " + response.data);
      console.log(response.data)
      setData(response.data);
    } catch (err) {
      console.error("Error fetchData: " + err.message)
    }
  };

  const fetchDataUsuario = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/selectRecolectasUsuario?userId=${userId}`);
      console.log("Response.data de selectRecolectasUsuario: ");
      console.log(response.data);
      setDataUsuario(response.data);
    } catch (err) {
      console.error("Error fetchDataUsuario: " + err.message)
    }
  };

  const fetchRecolectasCompletas = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/selectRecolectasCompletas`);
      console.log("Recolectas completas: ");
      console.log(response.data);

      setRecolectasCompletas(response.data);
    } catch (err) {
      console.error("Error fetchRecolectasCompletas: " + err.message)
    }
  };

  const fetchAgricultor = async () => {
    try {
      if (Object.keys(recolectaActual).length > 0) {
        console.log("Entra en fetchAgricultor");
        console.log("Recolecta actual:")
        console.log(recolectaActual)
        const response = await axios.get(`http://localhost:3001/selectAgricultor?agricultorId=${recolectaActual.id_agricultor}`);
        console.log("Response.data de Fetch Agricultor");
        console.log(response.data);
        setAgricultor(response.data[0])
      }
    } catch (err) {
      console.error("Error fetchAgricultor: " + err.message)
    } finally {
      setSaveModalVoluntarioVerde(false);
    }
  };

  const fetchAddVoluntarioRecolecta = async () => {
    try {
      if (saveModalVoluntarioVerde) {
        const response = await axios.get(`http://localhost:3001/addVoluntarioRecolecta?userId=${userId}&recolectaId=${recolectaActual.id}`);
        console.log("Response.data de AddVoluntarioRecolecta");
        console.log(response.data);
        fetchData();
        fetchDataUsuario();
      }
    } catch (err) {
      console.error("Error AddVoluntarioRecolecta: " + err.message)
    }
  };

  const fetchAddRecolecta = async () => {
    try {
      if (Object.keys(recolectaAdd).length > 0) {
        const response = await axios.post(`http://localhost:3001/addRecolecta`,
          {
            kilos: recolectaAdd.kilos,
            maxNumVoluntarios: recolectaAdd.maxNumVoluntarios,
            fecha: recolectaAdd.fecha,
            localizacion: recolectaAdd.localizacion,
            id_agricultor: recolectaAdd.idAgricultor
          }
        );
        console.log("Response.data de AddRecolecta");
        console.log(response.data);
        fetchData();
        fetchDataUsuario();
      }
    } catch (err) {
      console.error("Error AddRecolecta: " + err.message)
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

  useEffect(() => {
    fetchRecolectasCompletas();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Efecto que se ejecuta cuando agricultorId cambia
  useEffect(() => {
    if(recolectaActual) {
      fetchAgricultor();
    }
  }, [recolectaActual]);

  useEffect(() => {
    if(recolectaAdd) {
    fetchAddRecolecta();
    }
  }, [recolectaAdd]);

  // Efecto que se guarda ModalCalendario
  useEffect(() => {
    if(saveModalVoluntarioVerde) {
      fetchAddVoluntarioRecolecta();
    }
  }, [saveModalVoluntarioVerde]);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    console.log('Fecha seleccionada:', value);
    handleShowModalAgricultor();
  };

  const handleShowModalAgricultor = () => {
    console.log('Entra en handleShowModalAgricultor');
    setShowModalAgricultor(true);
    
  }

  const handleCloseModalAgricultor = () => setShowModalAgricultor(false);

  // const handleShowModal = () => {
  //   console.log("Entra en handleShowModal");
  //   setShowModal(true);
  // }

  // const handleCloseModal = () => {
  //   console.log("Entra en handleCloseModal");
  //   setShowModal(false);
  // }

  const pasarRecolecta = (recolecta) => {
    console.log("Entra en pasarRecolecta");
    setRecolectaActual(recolecta);
  }

  // const handleOnClickBoton = () => {
  //   handleShowModal();
  // }

  //Cuando se abre ModalCalendario
  const handleOnShowModalCalendario = () => {
    handleCloseModalAgricultor();
    //Consulta a la base de datos para obtener info de agricultor
  }

  const handleSaveModalVoluntarioVerde = () => {
    setSaveModalVoluntarioVerde(true);
  }


  const tileContentFunction = ({ date, view }) => {
    return (
      <TileContent date={date} view={view} recolectasCompletas={recolectasCompletas} pasarRecolecta={pasarRecolecta} tipoModal={tipoModal}/>
    );
  };

  return (
    <div className="App" id="div-recolecta">
      <h1>Recolectas {userId} {userRole}</h1>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContentFunction}
      />
      <ModalCalendario onShow={handleOnShowModalCalendario} handleSaveModalVoluntarioVerde={handleSaveModalVoluntarioVerde}/>
      <ModalAgricultor showModal={showModalAgricultor} handleCloseModal={handleCloseModalAgricultor} setRecolectaAdd={setRecolectaAdd}/>
    </div>
  );
}

export default Recolecta;
