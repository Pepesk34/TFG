import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();


// Aquí estamos creando un contexto usando `createContext()`. `UserContext` ahora tiene un `Provider` y un `Consumer`.

//#### Paso 2: Crear el Proveedor del Contexto

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userLoggedIn, setUserLoggedIn, userId, setUserId, ubicacion, setUbicacion }}>
      {children}
    </UserContext.Provider>
  );
};