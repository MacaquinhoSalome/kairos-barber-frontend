import React from "react";
import { Link } from "react-router-dom";

// Componente que muestra la página de inicio
function Home() {
  return (
    <div>
      <h1>Bienvenido a Kairo’s Barber</h1>
      <p>Gestiona tus citas de manera rápida y sencilla.</p>
      <Link to="/login">Iniciar Sesión</Link> {/* Enlace a la página de login */}
    </div>
  );
}

export default Home;
