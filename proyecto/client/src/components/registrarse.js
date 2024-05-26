import React from 'react';
import { useState } from 'react';
import Axios from "axios";
//asdfasldf

const Registrarse = () => {
  //Declaro varias variables de estados y funciones para actualizarlas
  const [nombre,setNombre] = useState("");
  const [apellidos,setApellidos] = useState("");
  const [dni,setDni] = useState("");
  const [usuario,setUsuario] = useState("");
  const [contraseña,setContraseña] = useState("");

  //Envia los datos al sevidor en la url http://localhost:3001/create con los datos proporcionados en el objeto
  const add = () =>{
    Axios.post("http://localhost:3001/create",{
      //Datos enviados
      nombre:nombre,
      apellidos:apellidos,
      dni:dni,
      usuario:usuario,
      contraseña:contraseña
    }).then(()=>{
      alert("Agricultor registrado con exito");
    });
  }
    return (
        <div>
            
            <label>Nombre: <input
            onChange={(event)=>{ //uso el evento onChange para detectar cambios en el campo de entrada
              setNombre(event.target.value) // Actualiza el estado del nombre con el valor ingresado por el usuario
            }}
            type="text"></input></label><br/>
            <label>Apellidos: <input
            onChange={(event)=>{
              setApellidos(event.target.value)
            }}
            type="text"></input></label><br/>
            <label>DNI: <input
            onChange={(event)=>{
              setDni(event.target.value)
            }}
            type="text"></input></label><br/>
            <label>Usuario: <input
            onChange={(event)=>{
              setUsuario(event.target.value)
            }}
            type="text"></input></label><br/>
            <label>Contraseña: <input
            onChange={(event)=>{
              setContraseña(event.target.value)
            }}
            type="text"></input></label><br/>
            <button onClick={add}>Registrar</button>
        </div>
    );
};

export default Registrarse;
