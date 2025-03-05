import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componente para el inicio de sesión
function Login() {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Guardar token en almacenamiento local
      navigate("/dashboard"); // Redirigir al dashboard
    } else {
      alert("Error al iniciar sesión"); // Mostrar mensaje de error
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
