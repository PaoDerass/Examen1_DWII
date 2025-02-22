import Link from 'next/link';
import React from 'react';

export default function InicioSesion() {
  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form>
        <div>
          <label>Usuario:</label>
          <input type="text" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <Link href="/admin">Acceder como Administrador</Link>
      <br />
      <Link href="/consultor">Acceder como Consultor</Link>
    </div>
  );
}