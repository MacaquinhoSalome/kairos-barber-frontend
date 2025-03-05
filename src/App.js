import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Citas from "./pages/Citas";

// Componente principal que define las rutas de la aplicación
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página de inicio */}
        <Route path="/login" element={<Login />} /> {/* Página de inicio de sesión */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Panel principal */}
        <Route path="/citas" element={<Citas />} /> {/* Gestión de citas */}
      </Routes>
    </Router>
  );
}

export default App;
