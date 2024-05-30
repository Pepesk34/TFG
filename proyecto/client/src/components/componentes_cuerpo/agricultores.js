
import React from 'react';
import { useState } from 'react';
import Axios from "axios";
import '../estilo.css';
//asdfasldf

const RegistrarseAgricultores = () => {
  //Declaro varias variables de estados y funciones para actualizarlas
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  //Envia los datos al sevidor en la url http://localhost:3001/create con los datos proporcionados en el objeto
  const add = () => {
    Axios.post("http://localhost:3001/create", {
      //Datos enviados
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      usuario: usuario,
      email: email,
      contraseña: contraseña
    }).then(() => {
      alert("Agricultor registrado con exito");
    });
  }
  return (
    <div id="div_formulario">
      <section className="form-register">
        <h4>Registro agricultor</h4>
        <input
          onChange={(event) => { //uso el evento onChange para detectar cambios en el campo de entrada
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
        <input
          onChange={(event) => {
            setUsuario(event.target.value)
          }}
          type="text" id="usuario" className="controls" placeholder="Ingresa el usuario"></input>
           <input
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          type="email" id="email" className="controls" placeholder="Ingresa el email"></input>
        <input
          onChange={(event) => {
            setContraseña(event.target.value)
          }}
          type="text" id="contraseña" className="controls" placeholder="Ingresa la contraseña"></input><br/>
        <button className="botons" onClick={add}>Registrar</button>
      </section>

    </div>
  );
};

export default RegistrarseAgricultores;
