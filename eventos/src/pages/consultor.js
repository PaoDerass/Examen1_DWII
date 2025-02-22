import React, { useState } from 'react';
import Link from 'next/link';

export default function Consultor() {
  const [eventos, setEventos] = useState([
    { id: 1, titulo: 'Evento 1', fechaInicio: '2023-10-01', fechaFin: '2023-10-02' },
    { id: 2, titulo: 'Evento 2', fechaInicio: '2023-10-03', fechaFin: '2023-10-04' },
  ]);
  const [comentario, setComentario] = useState('');

  const confirmarEvento = (id) => {
    if (comentario.toLowerCase() === 'asistire') {
      alert('Evento confirmado...');
      setComentario('');
    } else {
      alert('Debes escribir "asistire" para confirmar');
    }
  };

  return (
    <div>
      <h1>Panel de Consultor</h1>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.titulo} - {evento.fechaInicio} a {evento.fechaFin}
            <input
              type="text"
              placeholder="Escribe 'asistire' para confirmar"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
            <button onClick={() => confirmarEvento(evento.id)}>Confirmar</button>
          </li>
        ))}
      </ul>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}