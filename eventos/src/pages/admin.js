import React, { useState } from 'react';
import Link from 'next/link';

export default function Admin() {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nombre: 'Evento 1',
      tipo: 'DirectOn',
      fecha: '2023-10-15',
      contacto: 'evento1@ejemplo.com',
      tarifas: [
        { nombre: 'Fees', crecimiento: 100, precio: 'L800,000 (1.00%)', monto: 'L3000 (3.00%)' },
        { nombre: '', crecimiento: 0, precio: 'L1000 (5.00%)', monto: '' },
      ],
    },
  ]);

  const [nuevoEvento, setNuevoEvento] = useState({
    nombre: '',
    tipo: '',
    fecha: '',
    contacto: '',
  });

  const agregarEvento = () => {
    const evento = {
      id: Date.now(),
      nombre: nuevoEvento.nombre,
      tipo: nuevoEvento.tipo,
      fecha: nuevoEvento.fecha,
      contacto: nuevoEvento.contacto,
      tarifas: [],
    };
    setEventos([...eventos, evento]);
    setNuevoEvento({ nombre: '', tipo: '', fecha: '', contacto: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Eventos</h1>

      {}
      <div style={styles.formulario}>
        <h2>Agregar Nuevo Evento</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre del Evento:</label>
          <input
            type="text"
            value={nuevoEvento.nombre}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })}
            style={styles.input}
            placeholder="Nombre del evento"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tipo:</label>
          <input
            type="text"
            value={nuevoEvento.tipo}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, tipo: e.target.value })}
            style={styles.input}
            placeholder="Tipo de evento"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Fecha:</label>
          <input
            type="date"
            value={nuevoEvento.fecha}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contacto:</label>
          <input
            type="email"
            value={nuevoEvento.contacto}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, contacto: e.target.value })}
            style={styles.input}
            placeholder="Correo de contacto"
          />
        </div>
        <button onClick={agregarEvento} style={styles.boton}>Agregar Evento</button>
      </div>

      {}
      <div style={styles.eventosContainer}>
        {eventos.map((evento) => (
          <div key={evento.id} style={styles.evento}>
            <h2 style={styles.eventoTitulo}>{evento.nombre}</h2>
            <p><strong>Tipo:</strong> {evento.tipo}</p>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Contacto:</strong> {evento.contacto}</p>

            {}
            <h3>Tarifas</h3>
            <table style={styles.tabla}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Crecimiento</th>
                  <th>Precio</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {evento.tarifas.map((tarifa, index) => (
                  <tr key={index}>
                    <td>{tarifa.nombre}</td>
                    <td>{tarifa.crecimiento}</td>
                    <td>{tarifa.precio}</td>
                    <td>{tarifa.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <Link href="/" style={styles.enlace}>Volver al Inicio</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formulario: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  boton: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  },
  eventosContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  evento: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  eventoTitulo: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  tabla: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  enlace: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'none',
  },
};