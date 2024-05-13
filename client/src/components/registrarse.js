
import React from 'react';
import { useState } from 'react';
//asdfasldf

const Registrarse = () => {
  //Declaro varias variables de estados y funciones para actualizarlas
  const [nombre,setNombre] = useState("");
  const [apellidos,setApellidos] = useState("");
  const [dni,setDni] = useState("");
  const [usuario,setUsuario] = useState("");
  const [contraseña,setContraseña] = useState("");
  const lanzarDatos = () =>{
    alert(nombre);
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
            <button onClick={lanzarDatos}>Registrar</button>
        </div>
    );
};

export default Registrarse;
