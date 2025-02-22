import React, { createContext, useState } from 'react';

export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);

  const  AgregarEvento = (evento) => {
    setEventos([...eventos, evento]);
  };

  const EliminarEvento = (id) => {
    setEventos(eventos.filter((e) => e.id !== id));
  };

  return (
    <EventosContext.Provider value={{ eventos, AgregarEvento, EliminarEvento }}>
      {children}
    </EventosContext.Provider>
  );
};