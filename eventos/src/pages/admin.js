import React, { useState } from 'react';
import Link from 'next/link';

export default function Admin() {
  const [eventos, setEventos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const guardarEvento = () => {
    if (fechaInicio > fechaFin) {
      alert('La fecha de inicio no puede ser mayor que la fecha final, intentalo de nuevo');
      return;
    }
    const nuevoEvento = { id: Date.now(), titulo, fechaInicio, fechaFin };
    setEventos([...eventos, nuevoEvento]);
    setTitulo('');
    setFechaInicio('');
    setFechaFin('');
  };

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <div>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Fecha Inicio:</label>
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
      </div>
      <div>
        <label>Fecha Fin:</label>
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
      </div>
      <button onClick={guardarEvento}>Guardar Evento</button>

      <h2>Eventos Creados</h2>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.titulo} - {evento.fechaInicio} a {evento.fechaFin}
            <button onClick={() => setEventos(eventos.filter((e) => e.id !== evento.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}