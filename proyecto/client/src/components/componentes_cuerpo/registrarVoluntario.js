import Axios from "axios";
import '../estilo.css';
import React, { useState, useContext } from "react";
import { UserContext } from '../../contexts/userContext';

const RegistrarVoluntario = () => {
  // Declaro varias variables de estados y funciones para actualizarlas
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
 // const [matricula, setMatricula] = useState("");
//  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [data, setData] = useState();

  //Actualizamos el estado de los datos del usuario de manera global
  const { setUserRole, setUserLoggedIn, setUserId } = useContext(UserContext);

  // Envia los datos al sevidor en la url http://localhost:3001/registrarVoluntario con los datos proporcionados en el objeto
  const add = () => {
    Axios.post("http://localhost:3001/registrarVoluntario", {
      // Datos enviados
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
//      matricula: matricula,
 //     usuario: usuario,
      email: email,
      contraseña: contraseña
    }).then(response => {
      setData(response.data);
      setUserRole('V');
      setUserLoggedIn(true);
      setUserId(response.data.id);
      console.log("voluntario insertado: " + response.data.id);
      alert("Agricultor registrado con exito");

    }).catch((error) => {
      console.error("Error al registrar el voluntario:", error);
    });
  }

  return (
    <div id="div_formulario">
      <section className="form-register">
        <h4>Registro voluntario</h4>
        <input
          onChange={(event) => {
            setNombre(event.target.value) // Actualiza el estado del nombre con el valor ingresado por el usuario
          }}
          type="text" id="nombres" className="controls" placeholder="Ingresa el nombre"></input>
        <input
          onChange={(event) => {
            setApellidos(event.target.value)
          }}
          type="text" id="apellidos" className="controls" placeholder="Ingresa los apellidos"></input>
        <input
          onChange={(event) => {
            setDni(event.target.value)
          }}
          type="text" id="dni" className="controls" placeholder="Ingresa el dni"></input>
       {/* <input
          onChange={(event) => {
            setMatricula(event.target.value)
          }}
        type="text" id="matricula" className='controls' placeholder='Ingresa tu matrícula de coche'></input> */}
       {/* <input
          onChange={(event) => {
            setUsuario(event.target.value)
          }}
        type="text" id="usuario" className="controls" placeholder="Ingresa el usuario"></input> */}
          <input
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          type="email" id="email" className="controls" placeholder="Ingresa el email"></input>
        <input
          onChange={(event) => {
            setContraseña(event.target.value)
          }}
          type="password" id="contraseña" className="controls" placeholder="Ingresa la contraseña"></input><br />
        <button className="botons" onClick={add}>Registrar</button>
       {/* {mensaje && <p>{mensaje}</p>}  Muestra el mensaje de respuesta */}
      </section>
    </div>
  );
};

export default RegistrarVoluntario;
