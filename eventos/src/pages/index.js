import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const router = useRouter();

  const manejarInicioSesion = (e) => {
    e.preventDefault();

    // Credenciales 
    if (correo === 'admin@ejemplo.com' && contraseña === 'admin123') {
      router.push('/admin'); // lleva a panel de administrador
    } else if (correo === 'consultor@ejemplo.com' && contraseña === 'consultor123') {
      router.push('/consultor'); // lleva a panel de consultor
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Início de Sesión</h1>
      <form onSubmit={manejarInicioSesion} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={styles.input}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            style={styles.input}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" style={styles.boton}>Iniciar</button>
      </form>
    </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
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
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};