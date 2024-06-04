import Axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext';

function FormularioRegistro(props) {
  // Declaro varias variables de estados y funciones para actualizarlas
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [data, setData] = useState();

  // Actualizamos el estado de los datos del usuario de manera global
  const { setUserRole, setUserLoggedIn, setUserId } = useContext(UserContext);

  // Envia los datos al servidor en la URL http://localhost:3001/registrarVoluntario con los datos proporcionados en el objeto
  const add = () => {
    Axios.post("http://localhost:3001/registrar" + props.rol, {
      // Datos enviados
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      email: email,
      contraseña: contraseña
    }).then(response => {
      setData(response.data);
      setUserRole(props.rol);
      setUserLoggedIn(true);
      setUserId(response.data.id);
      console.log("Usuario insertado: " + response.data.id);
      alert("Usuario tipo " + props.rol + " registrado con éxito");

      // Vaciar los campos del formulario
      setNombre("");
      setApellidos("");
      setDni("");
      setEmail("");
      setContraseña("");

    }).catch((error) => {
      console.error("Error al registrar el voluntario:", error);

      // Vaciar los campos del formulario
      setNombre("");
      setApellidos("");
      setDni("");
      setEmail("");
      setContraseña("");
      
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
          type="text" id="nombres" className="controls" placeholder="Ingresa el nombre"
          value={nombre} // Añade el valor del estado al input
        ></input>
        <input
          onChange={(event) => {
            setApellidos(event.target.value)
          }}
          type="text" id="apellidos" className="controls" placeholder="Ingresa los apellidos"
          value={apellidos} // Añade el valor del estado al input
        ></input>
        <input
          onChange={(event) => {
            setDni(event.target.value)
          }}
          type="text" id="dni" className="controls" placeholder="Ingresa el dni"
          value={dni} // Añade el valor del estado al input
        ></input>
        <input
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          type="email" id="email" className="controls" placeholder="Ingresa el email"
          value={email} // Añade el valor del estado al input
        ></input>
        <input
          onChange={(event) => {
            setContraseña(event.target.value)
          }}
          type="password" id="contraseña" className="controls" placeholder="Ingresa la contraseña"
          value={contraseña} // Añade el valor del estado al input
        ></input><br />
        <button className="botons" onClick={add}>Registrar</button>
      </section>
    </div>
  );
}

export default FormularioRegistro;
