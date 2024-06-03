import React, { createContext, useState } from 'react';

// Crear el contexto
export const RecolectasContext = createContext();


// Aquí estamos creando un contexto usando `createContext()`. `UserContext` ahora tiene un `Provider` y un `Consumer`.

//#### Paso 2: Crear el Proveedor del Contexto

// Proveedor del contexto
export const RecolectasProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [dataUsuario, setDataUsuario] = useState([]);
    return (
        <RecolectasContext.Provider value={{ data, setData, dataUsuario, setDataUsuario }}>
            {children}
        </RecolectasContext.Provider>
    );
};