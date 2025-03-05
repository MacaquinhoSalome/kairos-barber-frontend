import React, { createContext, useState } from "react";

// Contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado

  // Función para establecer el usuario autenticado
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
