import React, { useState, useEffect } from "react";

// Componente para listar y gestionar citas del usuario
function Citas() {
  const [citas, setCitas] = useState([]); // Estado para almacenar las citas

  // Efecto que se ejecuta al cargar el componente para obtener las citas desde el backend
  useEffect(() => {
    fetch("http://localhost:8080/api/citas")
      .then((response) => response.json())
      .then((data) => setCitas(data));
  }, []);

  return (
    <div>
      <h2>Mis Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>{cita.fecha} - {cita.servicio}</li> // Mostrar cada cita en una lista
        ))}
      </ul>
    </div>
  );
}

export default Citas;
