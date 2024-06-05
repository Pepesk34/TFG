import React, { createContext, useState } from 'react';

// Crear el contexto
export const CalendarioContext = createContext();


// Aquí estamos creando un contexto usando `createContext()`. `UserContext` ahora tiene un `Provider` y un `Consumer`.

//#### Paso 2: Crear el Proveedor del Contexto

// Proveedor del contexto
export const CalendarioProvider = ({ children }) => {

  const [tipoModal, setTipoModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recolectaActual, setRecolectaActual] = useState({});
  const [agricultor, setAgricultor] = useState({});

    return (
        <CalendarioContext.Provider value={{ tipoModal, setTipoModal, showModal, setShowModal, recolectaActual, setRecolectaActual, agricultor, setAgricultor  }}>
            {children}
        </CalendarioContext.Provider>
    );
};